const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_API_TOKEN;
const channel = process.env.SLACK_CHANNEL;

if (!token || !channel) {
  console.error('SLACK_TOKEN and SLACK_CHANNEL environment variables are required');
  process.exit(1);
}

const web = new WebClient(token);

const prTitle = process.env.PR_TITLE || 'Unknown title';
const prUrl = process.env.PR_URL || '';
const prAuthor = process.env.PR_AUTHOR || 'unknown';
const prAction = process.env.PR_ACTION || 'unknown action';
const prReviewState = process.env.PR_REVIEW_STATE || '';

(async () => {
  try {
    const result = await web.chat.postMessage({
      channel: channel,
      text: `PR ${prAction}: ${prTitle}\nAuthor: ${prAuthor}\nURL: ${prUrl}\nReview: ${prReviewState || 'N/A'}`
    });

    console.log("Message sent successfully:", result.ts);
  } catch (err) {
    console.error("Error sending Slack message:", err);
    process.exit(1);
  }
})();