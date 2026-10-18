import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnquiryRecord {
  id: string;
  referenceNumber: string;
  fullName: string;
  phone: string;
  email?: string;
  category: string;
  description: string;
  preferredMethod: 'phone' | 'sms';
  receivedAt: string;
  status: 'received' | 'pending_conflict_check';
}

const enquiriesStore: EnquiryRecord[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'operational',
      practice: 'Mahendru Law Chamber',
      location: 'Thana Mor, Kacheri Road, Kamalia, Punjab, Pakistan',
      phone: '+92 300 2941990',
      timestamp: new Date().toISOString(),
    });
  });

  // Contact form submission endpoint
  app.post('/api/enquiries', (req: Request, res: Response) => {
    const {
      fullName,
      phone,
      email,
      category,
      description,
      preferredMethod,
      website_url_check, // Honeypot field
    } = req.body;

    // Honeypot spam trap
    if (website_url_check && String(website_url_check).trim().length > 0) {
      // Return 200 without saving spam bot
      return res.status(200).json({
        success: true,
        referenceNumber: 'MLC-VER-SPAM-FILTERED',
        message: 'Enquiry received.',
      });
    }

    // Required field validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full legal name (minimum 2 characters).',
      });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid contact telephone number with country/area code.',
      });
    }

    // Phone format check (standard international or local digits)
    const phoneClean = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!/^\d{7,15}$/.test(phoneClean)) {
      return res.status(400).json({
        success: false,
        error: 'Telephone number format is invalid. Please include digits and area code.',
      });
    }

    // Optional email validation
    if (email && typeof email === 'string' && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          error: 'Provided email address format is invalid.',
        });
      }
    }

    if (!category || typeof category !== 'string' || category.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please select an enquiry category from the list.',
      });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 15) {
      return res.status(400).json({
        success: false,
        error: 'Please describe the general nature of your enquiry (minimum 15 characters). Do not include sensitive passwords or bank details.',
      });
    }

    const refSuffix = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `MLC-${new Date().getFullYear()}-${refSuffix}`;

    const record: EnquiryRecord = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      referenceNumber,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email && typeof email === 'string' ? email.trim() : undefined,
      category: category.trim(),
      description: description.trim(),
      preferredMethod: preferredMethod === 'sms' ? 'sms' : 'phone',
      receivedAt: new Date().toISOString(),
      status: 'pending_conflict_check',
    };

    enquiriesStore.push(record);

    console.log(`[Mahendru Law Chamber] Logged enquiry ${referenceNumber} for ${record.fullName} (Category: ${record.category})`);

    return res.status(201).json({
      success: true,
      referenceNumber,
      message: 'Your preliminary legal enquiry has been formally registered with Mahendru Law Chamber.',
      timestamp: record.receivedAt,
      instructions: 'A member of the chamber will review this enquiry for conflict clearance and initiate contact via your preferred method.',
    });
  });

  // Attach Vite middleware in development
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Mahendru Law Chamber] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
