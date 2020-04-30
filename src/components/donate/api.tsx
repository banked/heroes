const ENDPOINTS = {
    'banked': "https://europe-west2-heroes-a923a.cloudfunctions.net/createBankedPaymentRequest",
    'stripe': "https://europe-west2-heroes-a923a.cloudfunctions.net/createStripePaymentRequest",
}

export type ProviderType = "stripe" | "banked";


interface CreatePaymentRequest {
  provider: ProviderType;
  amount: number;
  name: string;
  email: string;
}

interface PaymentRequestResponse {
  url: string,
  sessionId: string
}

export function makePaymentRequest(request: CreatePaymentRequest): Promise<PaymentRequestResponse> {
    const { provider, amount, name, email } = request;
    const endpoint:string = ENDPOINTS[provider] 
    return fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
        payerName: name,
        payerEmail: email,
      }),
    })
    .then((response) => response.json())
}