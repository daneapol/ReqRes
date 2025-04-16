import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in'
    },
    JSONResponse: {},
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    '@codeceptjs/cucumber': {
      require: [
        './steps/gherkin_steps.ts'
      ]
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/gherkin_steps.ts'
    ]
  },
  name: 'ReqRes'
}