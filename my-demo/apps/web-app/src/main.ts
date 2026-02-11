import { formatDate, capitalize } from '@nx-demo/utils';
import { createClient } from '@nx-demo/api-client';

async function bootstrap() {
  const today = new Date();
  const client = createClient('https://api.domain.com');

  console.log(capitalize('web application started'));
  console.log(`Date: ${formatDate(today)}`);

  const result = await client.fetch('/users');
  console.log('API Response:', result);
}

bootstrap();
