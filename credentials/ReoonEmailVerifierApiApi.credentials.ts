import { type IAuthenticateGeneric, type Icon, type ICredentialTestRequest, type ICredentialType, type INodeProperties } from "n8n-workflow";

// Generated with ts-morph
export class ReoonEmailVerifierApiApi implements ICredentialType {
  name = "reoonEmailVerifierApiApi";
  displayName = "Reoon Email Verifier API";
  documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-reoon-email-verifier";
  icon: Icon = {
        light: "file:../nodes/ReoonEmailVerifierApi/reoonEmailVerifierApi.svg",
        dark: "file:../nodes/ReoonEmailVerifierApi/reoonEmailVerifierApi.dark.svg"
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
