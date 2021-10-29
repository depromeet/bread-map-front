import { Global, css } from '@emotion/react';

const BreadMarkerGlobalStyle = () => (
  <Global
    styles={css`
      .bread-marker {
        --marker-width: 16px;
        --marker-height: 18px;

        &[data-size='small'] {
          --marker-width: 16px;
          --marker-height: 18px;
        }

        &[data-size='medium'] {
          --marker-width: 24px;
          --marker-height: 27px;
        }

        &[data-size='large'] {
          --marker-width: 32px;
          --marker-height: 36px;
        }

        width: var(--marker-width);
        height: var(--marker-height);
        transition: width 225ms, height 225ms;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        --item-background-fill: #ff6e40;
        --item-content-fill: #ffffff;

        &[data-type='default'] {
          --item-background-fill: #ff6e40;
          --item-content-fill: #ffffff;
        }

        &[data-type='filtered'] {
          --item-background-fill: #ff6e40;
          --item-content-fill: #ffffff;
        }

        &[data-type='wished'] {
          --item-background-fill: #1ec780;
          --item-content-fill: #ffffff;
        }

        &[data-type='flaged'] {
          --item-background-fill: #7b61ff;
          --item-content-fill: #ffffff;
        }

        &__item {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.36));
        }

        &__item-background {
          fill: var(--item-background-fill);
        }

        &__item-content {
          fill: var(--item-content-fill);
        }
      }
    `}
  />
);

export default BreadMarkerGlobalStyle;
