module.exports = (options, app) => {
  return async function roboMiddleware(ctx, next) {
    console.log('options', options)
    const source = ctx.get('user-agent') || ''
    const match = options.ua.some(ua => ua.test(source))
    if (match) {
      ctx.status = 403
      ctx.message = 'Go away, robot.'
    } else {
      await next()
    }
  }
}
