# Reoon Email Verifier n8n community node

Verify email addresses in real time or bulk, detect disposable inboxes, and check credit balances with Reoon Email Verifier

Generated from OpenAPI 1.0.0 with template 1.1.0. Generated files are platform-managed and will be overwritten during regeneration.

## Authentication

Configure the generated API key credential in n8n before using the node.

## Supported operations

- `GET /check-account-balance/` - Get Bulk Verification Result
  - Retry Contract: none
  - Pagination Contract: none
- `POST /create-bulk-verification-task/` - Create Bulk Verification Task
  - Retry Contract: none
  - Pagination Contract: none
- `GET /get-result-bulk-verification-task/` - Get Account Balance
  - Retry Contract: none
  - Pagination Contract: none
- `GET /verify` - Verify Email
  - Retry Contract: none
  - Pagination Contract: none

## Usage

1. Install this community-node package in n8n.
2. Add the **Reoon Email Verifier** node to a workflow.
3. Select a resource and operation, configure its parameters, and execute the workflow.

## Example workflow

Connect **Manual Trigger** -> **Reoon Email Verifier** -> a destination node, select an operation, then run the workflow and inspect the returned items.

## Development

```sh
npm install
npm run build
npm run lint
npm run dev
```

`npm run dev` starts a local n8n development instance. Find the integration by its **Reoon Email Verifier** display name.
