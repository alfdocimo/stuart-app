import React from "react";
import styles from "./FlagIcon.module.scss";
import cx from "classnames";

export default function FlagIcon({ type }) {
  return (
    <div
      className={cx(
        {
          [styles.error]: type === "error",
          [styles.success]: type === "success",
          [styles.warning]: type === "warning",
        },
        styles.base
      )}
    >
      <svg width="32px" height="32px" viewBox="0 0 32 32">
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="dropOffBadgeBlank" fill-rule="nonzero">
            <g>
              <circle
                id="Oval-62"
                fill="#F0F3F7"
                cx="16"
                cy="16"
                r="16"
              ></circle>
              <path
                d="M9.9999727,7 L9.9999727,7 C10.5522424,7 10.9999454,7.44770303 10.9999454,7.99997272 L10.9999454,24.0000273 L10.9999454,24.0000273 C10.9999454,24.552297 10.5522424,25 9.9999727,25 C9.44770303,25 9,24.552297 9,24.0000273 L9,7.99997272 L9,7.99997272 C9,7.44770303 9.44770303,7 9.9999727,7 L9.9999727,7 Z M12,8 L23.1169095,8.00005056 L23.1169095,8.00005056 C23.3930519,8.00005181 23.6169085,8.22391045 23.6169072,8.50005283 C23.6169068,8.59067403 23.5922779,8.67959139 23.5456537,8.75729843 L21.3086975,12.4855588 C21.118688,12.8022412 21.118688,13.1978679 21.3086975,13.5145503 L23.5456489,17.2428027 L23.5456489,17.2428027 C23.6877229,17.4795928 23.6109404,17.7867229 23.3741503,17.928797 C23.2964419,17.975422 23.2075229,18.000051 23.1169001,18.0000506 L12,18 L12,8 Z"
                id="Combined-Shape"
                fill="#8596A6"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
