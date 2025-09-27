# GitHub Action – Slack Notifications for Pull Requests

This repository contains a **custom GitHub Action** that sends notifications to a Slack channel whenever a Pull Request is opened, closed, approved, or rejected.

## 📌 Project Status
✅ First version implemented.

## 🎯 Goals
- Create a GitHub Actions workflow triggered on Pull Request events.
- Implement a Node.js script to send messages to Slack via API.
- Make the action reusable across different projects.

## 📂 Structure
- [slack-notification.yml](file:///Users/leonardoandrade/projects/psp/portfolio/slack-github-action/slack-notification.yml) - GitHub Action metadata
- [.github/workflows/slack-notification.yml](file:///Users/leonardoandrade/projects/psp/portfolio/slack-github-action/.github/workflows/slack-notification.yml) - Example workflow
- [notify.js](file:///Users/leonardoandrade/projects/psp/portfolio/slack-github-action/notify.js) - Slack notification script
- [package.json](file:///Users/leonardoandrade/projects/psp/portfolio/slack-github-action/package.json) - Project dependencies
- [README.md](file:///Users/leonardoandrade/projects/psp/portfolio/slack-github-action/README.md) - Documentation

## 🚀 Usage

### As a GitHub Action

1. Set up your Slack app and get a Bot User OAuth Token
2. Add the following secrets to your GitHub repository:
   - `SLACK_API_TOKEN`: Your Slack Bot User OAuth Token
   - `SLACK_CHANNEL`: The ID of the Slack channel to post notifications to

3. Add this workflow to your repository:
```
name: Notify Slack on PR Events

on:
  pull_request:
    types: [opened, closed, reopened]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Notify Slack
        uses: leonardoandrade/slack-github-action@v1
        with:
          slack-api-token: ${{ secrets.SLACK_API_TOKEN }}
          slack-channel: ${{ secrets.SLACK_CHANNEL }}
```

### For Local Testing

To test the script locally, you need to set the required environment variables:

```bash
SLACK_API_TOKEN=your-token SLACK_CHANNEL=your-channel yarn start
```

Note: For security reasons, never commit your actual tokens to the repository.

## 📝 Notes

- The action currently supports `pull_request` and `push` events
- More event types and customization options will be added in future versions
