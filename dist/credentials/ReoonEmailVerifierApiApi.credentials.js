"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReoonEmailVerifierApiApi = void 0;
class ReoonEmailVerifierApiApi {
    constructor() {
        this.name = "reoonEmailVerifierApiApi";
        this.displayName = "Reoon Email Verifier API";
        this.documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-reoon-email-verifier";
        this.icon = {
            light: "file:../nodes/ReoonEmailVerifierApi/reoonEmailVerifierApi.svg",
            dark: "file:../nodes/ReoonEmailVerifierApi/reoonEmailVerifierApi.dark.svg"
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
exports.ReoonEmailVerifierApiApi = ReoonEmailVerifierApiApi;
//# sourceMappingURL=ReoonEmailVerifierApiApi.credentials.js.map