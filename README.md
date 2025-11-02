OZORNIKI - готовый пакет для Vercel

Как опубликовать:
1. Скачайте zip и в Vercel -> Add New -> Project -> Import -> Upload -> выберите этот zip.
2. В разделе Environment Variables добавьте (чтобы включить реальные email/stripe):
   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
   - STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY
   - ORDER_EMAIL (например ozornikimag@mail.ru)
   - REACT_APP_ADMIN_PASSWORD (admin123)
3. Нажмите Deploy.

Примечание:
- Для реальной приёмки платежей нужно зарегистрировать аккаунт Stripe и указать ключи.
- Для отправки email нужно SMTP (например, mailbox.org, mail.ru, G Suite) или сервис типа SendGrid.
- После деплоя я помогу проверить и подключить домен.
