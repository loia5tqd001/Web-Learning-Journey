# Messenger Webhook

[Instruction Url](https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup?locale=en_US)

Steps:
- `node index.js` to start the webhook
- Test the `get` request:
```
curl -X GET "localhost:1337/webhook?hub.verify_token=<YOUR_VERIFY_TOKEN>&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"
```
- Test the `post` request:
```
curl -H "Content-Type: application/json" -X POST "localhost:1337/webhook" -d '{"object": "page", "entry": [{"messaging": [{"message": "TEST_MESSAGE"}]}]}'
```