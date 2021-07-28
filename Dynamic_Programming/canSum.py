



# canSum(7, [5,3,4,7]) --> true 3 + 4, 7


'''

Can reuse any value in the list


Recursive brute force: 
    base case sum = 0 return true
    base case size = 0 return false
    
    itterate through list
        if value - item >= 0 
            recursive call with sum = value - item
'''

def canSum(value, nums):
    memo = {}
    def canSumMemo(value):
        if memo.get(value) is not None:
            return memo[value]
        if value == 0: return True
        if value < 0: return False

        for num in nums:
            diff = value - num
            if canSumMemo(diff):
                memo[diff] = True
                return True
        memo[value] = False
        return False
    print(memo)
    return canSumMemo(value)

# print(canSum(1500,[2,4,6,7,14,19]))

#

def howSum(value, nums):
    memo = {}
    def helper(value):
        if value in memo:
            return memo[value]
        if value == 0: return []
        if value < 0: return None
        for num in nums:
            remainder = value - num
            result = helper(remainder)
            if result is not None:
                memo[value] = [*result, num]
                return memo[value]

        memo[value] = None
        return None
    print(memo)
    return helper(value)

# print(howSum(1000,[3,5,7,9,10]))

def bestSum(target, nums):
    memo = {}
    def helper(target):
        if target in memo: return memo[target]
        if target == 0: return []
        if target < 0: return None

        shortestCombination = None

        for num in nums:
            remainder = target - num
            remainderCombination = helper(remainder)
            if remainderCombination is not None:
                combination = [*remainderCombination, num]
                if shortestCombination is None or len(combination) < len(shortestCombination):
                    shortestCombination = combination 

        memo[target] = shortestCombination
        return shortestCombination

    result = helper(target)
    print(memo)
    return result

print(bestSum(20,[3,8,10]))