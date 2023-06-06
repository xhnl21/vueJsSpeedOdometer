import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'speed',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
