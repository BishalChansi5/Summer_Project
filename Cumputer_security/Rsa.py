import random
p = input("enter prime number p :")
q= input("Enter Second Prime number q: ")
flag = False

if p == 1:
    print(p, "is not a prime number")
elif p > 1:
    # check for factors
    for i in range(2, p):
        if (p % i) == 0:
            # if factor is found, set flag to True
            flag = True
            # break out of loop
            break

    # check if flag is True
    if flag:
        print(p, "is not a prime number")
    else:
        print(p, "is a prime number")

n = p * q
phi_n = (p-1) * (q-1) 

def gcd(a, b):
    if(b = 0):
        return b
    else:
        

# generate e
e= random.randit(2, phi_n)
while gcd(e, phi_n) != 1:
    e= random.randit(2, phi_n)

e = 7
def find_d(e,phi_n):
    i=1
    while True:
        if((e * i)% phi_n == 1):
            return i
        else:
            i = i + 1

 
          

