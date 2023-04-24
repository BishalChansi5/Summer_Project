import sys
input_var = input("Enter your data: ")
hash_data = hash(input_var)
result = hash((1,2,22))  #tuple value
result1 = hash(21)  #integer value
# list = ["Ram","Hari","shyam"]
# result2 = hash(list)

length_hash = sys.getsizeof(hash_data)
print("Length of hash function :" ,length_hash)
print(hash_data)
print(hash_data)
print(hash_data)
print("Tuple hash value :" ,result)
print("Integer hash value :" , result1)
# print("List hash value :" , result2) # list is unhashable

# Output of hash function is fixed length 
#Hash function of string is same for a single program