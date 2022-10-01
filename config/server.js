module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: 'zeJCn4R378czy3eNrRuiGg==,U/RhW7EMx2miTlJp4JDd/Q==,w/KWjvKfH+P7MCBAKSQCHQ==,xdo0m9WMnZ92Nj+f/B+DXg==',
  },
});
