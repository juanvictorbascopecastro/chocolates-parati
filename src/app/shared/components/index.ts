import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

export const components: any = [
  SearchInputComponent,
  WhatsappComponent,
  LoaderComponent,
  SocialMediaComponent,
  LogoComponent,
];

export * from './search-input/search-input.component';
export * from './loader/loader.component';
export * from './social-media/social-media.component';
export * from './whatsapp/whatsapp.component';
export * from './logo/logo.component';
