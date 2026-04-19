import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="SageBuddy home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 68 56" role="img">
          <path
            d="M12 16c0-5.523 4.477-10 10-10h33v9H22a1 1 0 0 0 0 2h20c7.18 0 13 5.82 13 13s-5.82 13-13 13H10v-9h32a2 2 0 1 0 0-4H22c-5.523 0-10-4.477-10-10Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>
        <strong>SageBuddy</strong>
        <small>Your Wise Companion</small>
      </span>
    </Link>
  );
}
