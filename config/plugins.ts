
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'contact@augny-badminton.fr',
        defaultReplyTo: 'contact@augny-badminton.fr',
      },
    },
  },
  upload: {
    config: {
      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        endpoint: env("AWS_ENDPOINT"),
        region: env("AWS_REGION"),
        params: {
          ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
});
