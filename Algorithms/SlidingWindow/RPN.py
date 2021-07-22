# (3 4 +) postfix RPN
# (3 + 4) infix 
# (+ 3 4) prefix PN

from typing import Type

ops = {'+': (lambda x,y: x + y)
		 '-': (lambda x,y: x+y)}


class reverse_polish_calc:
	ops = {'+': (lambda x,y: x + y), 
				'-': (lambda x,y: x - y),
				'*': (lambda x,y: x * y),
				'/': (lambda x,y: x / y),
				'^': (lambda x,y: x ^ y)}

	def __init__(self):
		self.data = []	

	def applyOperation(self, op):
		val2 = self.data.pop()
		val1 = self.data.pop()
		soln = reverse_polish_calc.ops[op] (val1,val2)
		return soln

	def addExpression(self, expression):
		cleanExpr = expression.replace(" ","")
		for exp in cleanExpr:
			if exp in reverse_polish_calc.ops:
				soln = self.applyOperation(exp)
				self.data.append(soln)
			elif exp.isnumeric():
				self.data.append(int(exp))
			else:
				# Throw error
				raise TypeError(f"Invalid type: ${exp}")
		if len(self.data) != 1: raise TypeError(f"Malformed Expression ${expression}")
		return self.data.pop()

calc = reverse_polish_calc()
print(calc.addExpression(input()))