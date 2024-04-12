if (active) {
  return await prisma.todos.findMany({ where: { active: true } })
}
return await Prisma.todos.findMany()
