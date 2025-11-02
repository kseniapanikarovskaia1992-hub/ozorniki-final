import json
def handler(request):
    # This is a placeholder. On Vercel you'd use a Node.js function to send email via SMTP or an email API.
    return { "statusCode": 200, "body": json.dumps({ "ok": True, "message": "Order received (stub)." }) }
