/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50% 128.57% at 50% -36.61%, #8015A7 0%, rgba(97,54, 144, 0) 100%);',
        'sidebar-gradient':
          'linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%)',
        'category-gradient':
          'linear-gradient(180deg, rgba(196, 39, 251, 0) 0%, rgba(196, 39, 251, 0.15) 100%)',
        'category-gradient-0':
          'linear-gradient(0deg, rgba(196, 39, 251, 0) 0%, rgba(196, 39, 251, 0.15) 100%)',
        'card-bg-gradient':
          'linear-gradient(180deg, rgba(72, 49, 157, 0.2) 18.75%, rgba(72, 49, 157, 0) 100%);',
        'content-bg-gradient':
          'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%);',
        'content-bg-gradient-0':
          'linear-gradient(0deg, #2B2F53 3.16%, #1D1C34 36.05%);',
        'border-card-gradient':
          'border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 66.67%, rgba(255, 255, 255, 0) 100%);',
        'card-hover':
          'linear-gradient(180deg, rgba(48,38,107,0.7483368347338936) 91%, rgba(255,255,255,0) 96%)',
        'channel-join':
          'linear-gradient(180deg, rgba(37,36,76,0.9248074229691877) 70%, rgba(255,255,255,0) 100%)',
        'channel-subscribe':
          'linear-gradient(0deg, rgba(113,29,153,1) 50%, rgba(255,255,255,0) 100%)',
        'card-items-detail-hover':
          'linear-gradient(180deg, rgba(72,49,157,0.8939950980392157) 75%, rgba(255,255,255,0) 100%)',
        'card-items-detail':
          'linear-gradient(90deg, rgba(48,43,99,1) 21%, rgba(255,255,255,0) 100%)',
        'channelDetail-img':
          'linear-gradient(0deg, rgba(29,28,52,1) 5%, rgba(255,255,255,0) 27%)',
        'category-channel-detail':
          'linear-gradient(0deg, rgba(83,41,123,0.29735644257703087) 0%, rgba(83,41,123,0.17130602240896353) 13%, rgba(255,255,255,0) 81%)',
        'category-channel-detail-selected':
          'radial-gradient(circle, rgba(87,41,129,0.5802696078431373) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        'category-shadow': 'box-shadow: 0px 10px 20px 0px #0000004C',
      },
    },
    fontFamily: {
      'SF-Pro-Text': ['SF Pro Text', 'sans-serif'],
      'SF-Pro': ['SF Pro', 'sans-serif'],
    },
  },
  plugins: [],
};
