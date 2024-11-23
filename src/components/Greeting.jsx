import { useState } from 'preact/hooks';

/**
 * A component displaying a random greeting message from a list on button click.
 * @param {{messages: string[]}} props
 * @prop {string[]} messages A list of messages to be displayed.
 */
export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新しい挨拶
      </button>
    </div>
  );
}