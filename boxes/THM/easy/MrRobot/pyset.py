with open("fsocity.dic") as f:
    content = f.read()

wordlist = content.split('\n')

wordset = set()

for word in wordlist:
    wordset.add(word)

with open("pruned_list.dic", 'w') as f:
    for word in wordset:
        f.write(f"{word}\n")
