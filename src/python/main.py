import js
import functools
valList = []


def script(valList, js, functools):

    pythonPrice = js.priceVar
    total = 0

    def subScript(valList, pythonPrice, total, functools):

        price = int(pythonPrice)
        valList.append(price)

        total = functools.reduce(lambda a, b: a + b, valList)

        return total

    subScript(valList, pythonPrice, total, functools)

    return total


script(valList, js, functools)
