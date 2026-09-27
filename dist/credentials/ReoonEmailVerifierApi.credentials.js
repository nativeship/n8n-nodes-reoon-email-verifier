"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReoonEmailVerifierApi = void 0;
class ReoonEmailVerifierApi {
    constructor() {
        this.name = "reoonEmailVerifierApi";
        this.displayName = "Reoon Email Verifier API";
        this.documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-reoon-email-verifier";
        this.icon = {
            light: "file:../nodes/ReoonEmailVerifier/reoonEmailVerifier.svg",
            dark: "file:../nodes/ReoonEmailVerifier/reoonEmailVerifier.dark.svg"
        };
        this.properties = [
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
        this.authenticate = {
            type: "generic",
            properties: {
                qs: {
                    key: "={{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://emailverifier.reoon.com/api/v1",
                url: "/check-account-balance/"
            }
        };
    }
}
exports.ReoonEmailVerifierApi = ReoonEmailVerifierApi;
//# sourceMappingURL=ReoonEmailVerifierApi.credentials.js.map