import { type IAuthenticateGeneric, type Icon, type ICredentialTestRequest, type ICredentialType, type INodeProperties } from "n8n-workflow";

// Generated with ts-morph
export class ReoonEmailVerifierApi implements ICredentialType {
  name = "reoonEmailVerifierApi";
  displayName = "Reoon Email Verifier API";
  documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-reoon-email-verifier";
  icon: Icon = {
        light: "file:../nodes/ReoonEmailVerifier/reoonEmailVerifier.svg",
        dark: "file:../nodes/ReoonEmailVerifier/reoonEmailVerifier.dark.svg"
    };
  properties: INodeProperties[] = [
        {
            displayName: "key",
            name: "secret",
            type: "string",
            typeOptions: {
                password: true
            },
            default: "",
            required: true
        }
    ];
  authenticate: IAuthenticateGeneric = {
        type: "generic",
        properties: {
            qs: {
                key: "={{$credentials.secret}}"
            }
        }
    };
  test: ICredentialTestRequest = {
        request: {
            baseURL: "https://emailverifier.reoon.com/api/v1",
            url: "/check-account-balance/"
        }
    };
}
