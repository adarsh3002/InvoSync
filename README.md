# InvoSync

[![Next.js](https://img.shields.io/badge/Next.js-v11.1.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green?style=flat&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.0-blue?style=flat&logo=mongodb)](https://www.mongodb.com/)

**InvoSync** is a streamlined invoicing solution tailored for small businesses, event organizers, and merchants. It facilitates efficient invoice creation, QR code integration for payment tracking, and real-time transaction updates.

## Key Features

- **Invoice Creation**: Generate detailed invoices with customizable fields.
- **QR Code Support**: Each invoice is embedded with a QR code, enabling instant access to transaction and payment details.
- **Bulk Invoicing**: Autofill feature simplifies generating invoices for multiple clients.
- **Export Options**: Download invoices in PDF or CSV formats.
- **Real-Time Sync**: Automatically update invoice statuses for both users and customers.
- **User-Friendly UI**: Intuitive interface designed for fast, efficient workflow.

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Package Manager**: PNPM
- **PDF Generation**: PDFKit, PDFKit-Table
- **QR Code Generation**: QRCode Library
- **CSV Export**: json2csv

## Setup Instructions

### Prerequisites
- Node.js v14.17.0 or higher
- PNPM v6.0.0 or higher

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/adarsh3002/InvoSync.git
    cd InvoSync
    ```

2. Install the dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm dev
    ```

4. Visit the application at [http://localhost:3000](http://localhost:3000).

## Usage

1. Sign up or log in.
2. Fill in customer and transaction details.
3. Generate the invoice.
4. Use the email feature to send the invoice or download it in PDF/CSV format.

## Deployment

InvoSync is deployed on Vercel and can be accessed [here](https://invo-sync.vercel.app).

## Contributing

We welcome contributions. To contribute:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add YourFeature"
    ```
4. Push your branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Submit a pull request.


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [PDFKit](http://pdfkit.org/)
- [QRCode Library](https://github.com/soldair/node-qrcode)

## Contact

For inquiries, contact [ak47kumaradarsh@gmail.com](mailto:ak47kumaradarsh@gmail.com).
