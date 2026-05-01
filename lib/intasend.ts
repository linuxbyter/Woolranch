import axios from 'axios';

const INTASEND_BASE_URL = process.env.INTASEND_ENVIRONMENT === 'live' 
  ? 'https://payment.intasend.com' 
  : 'https://sandbox.intasend.com';

const PUBLISHABLE_KEY = process.env.INTASEND_PUBLISHABLE_KEY;
const SECRET_KEY = process.env.INTASEND_SECRET_KEY;

export interface StkPushRequest {
  phone: string;
  amount: number;
  currency: string;
  reference: string;
  callbackUrl: string;
}

export interface StkPushResponse {
  invoice_id: string;
  tracking_id: string;
  status: string;
  created_at: string;
}

export interface PaymentStatus {
  invoice_id: string;
  tracking_id: string;
  state: string;
  status: string;
  amount: number;
  currency: string;
  checkout_url?: string;
}

export async function initiateStkPush(data: StkPushRequest): Promise<StkPushResponse> {
  try {
    const response = await axios.post(
      `${INTASEND_BASE_URL}/api/v1/stk-push/`,
      {
        phone: data.phone,
        amount: data.amount,
        currency: data.currency,
        reference: data.reference,
        callback_url: data.callbackUrl,
      },
      {
        headers: {
          'Authorization': `Bearer ${SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Intasend STK Push error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'STK Push failed');
  }
}

export async function checkPaymentStatus(invoiceId: string): Promise<PaymentStatus> {
  try {
    const response = await axios.get(
      `${INTASEND_BASE_URL}/api/v1/payment-status/`,
      {
        params: { invoice_id: invoiceId },
        headers: {
          'Authorization': `Bearer ${SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Intasend status check error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Status check failed');
  }
}

export function formatPhoneNumber(phone: string): string {
  let formatted = phone.replace(/\D/g, '');
  
  if (formatted.startsWith('0')) {
    formatted = '254' + formatted.substring(1);
  } else if (formatted.startsWith('7') || formatted.startsWith('1')) {
    formatted = '254' + formatted;
  }
  
  return formatted;
}

export function isValidKenyanPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return /^254[71][0-9]{8}$/.test(cleaned) || /^0[71][0-9]{8}$/.test(cleaned);
}