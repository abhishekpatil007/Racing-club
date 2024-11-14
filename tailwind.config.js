/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: {
          "100": "#efe9e4",
          "200": "rgba(239, 233, 228, 0.9)",
        },
        white: "#fff",
        dimgray: {
          "100": "#535353",
          "200": "#4c4c4c",
        },
        gray: {
          "100": "#767676",
          "200": "#111",
        },
        black: "#000",
        goldenrod: "#f4ab32",
        deepskyblue: "#06b9fc",
        darkslateblue: "#1f1541",
        darkslategray: {
          "100": "#404041",
          "200": "#383838",
        },
        tomato: "#e13421",
        whitesmoke: "#f5f5f5",
        darkorange: "#fc8b00",
        darkgray: "rgba(165, 165, 165, 0.4)",
        silver: "rgba(201, 201, 201, 0.4)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      mini: "15px",
      lgi: "19px",
      "7xl": "26px",
      "2xl": "21px",
      "4xl": "23px",
      lg: "18px",
      "33xl": "52px",
      "23xl": "42px",
      "12xl": "31px",
      "499xl": "518px",
      "188xl": "207px",
      "110xl": "129px",
      "9xl": "28px",
      "3xl": "22px",
      "104xl": "123px",
      "30xl": "49px",
      mid: "17px",
      "34xl": "53px",
      "13xl": "32px",
      sm: "14px",
      "6xl": "25px",
      xl: "20px",
      "27xl": "46px",
      "18xl": "37px",
      base: "16px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "239xl": "258px",
      "84xl": "103px",
      "45xl": "64px",
      "8xl": "27px",
      "31xl": "50px",
      "21xl": "40px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1625: {
        raw: "screen and (max-width: 1625px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
