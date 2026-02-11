import { formatDate, capitalize } from '@nx-demo/utils';
import { createClient } from '@nx-demo/api-client';

function launchApp() {
  const today = new Date();
  const client = createClient('https://mobile-api.domain.com');

  console.log(capitalize('mobile application started'));
  console.log(`Today is ${formatDate(today)}`);

  client.fetch('/profile').then(result => {
    console.log('Profile loaded:', result);
  });
}

launchApp();
