export class Pagamento {
    constructor(){
        this.reference_id = "ex-00001";
        this.description = "Compra na loja da 3S";
        this.amount = new Amount();
        this.payment_method = new PaymentMethod()
    }
    reference_id: string;
    description: string;
    amount: Amount;
    payment_method: PaymentMethod;
    notification_urls: string[];
    metadata: Metadata;
}

export class Amount {
    constructor(){
        this.value = 100;
        this.currency = "BRL"
    }
    value: number;
    currency: string;
}

export class Holder {
    constructor(){
        this.name = "Jose da Silva"
    }
    name: string;
}

export class Card {
    constructor(){
        this.number = "4111111111111111";
        this.exp_month = "03";
        this.exp_year = "2026";
        this.security_code = "123";
        this.holder = new Holder();
    }
    number: string;
    exp_month: string;
    exp_year: string;
    security_code: string;
    holder: Holder;
}

export class PaymentMethod {
    constructor(){
        this.type = "CREDIT_CARD";
        this.installments = 1;
        this.capture = false;
        this.soft_descriptor = "3SStore";
        this.card = new Card();
    }
    type: string;
    installments: number;
    capture: boolean;
    soft_descriptor: string;
    card: Card;
}

export interface Metadata {
    Exemplo: string;
    NotaFiscal: string;
    idComprador: string;
}





