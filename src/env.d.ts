interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_MESSAGE_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;

    readonly MODE: 'development' | 'production';
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
