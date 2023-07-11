import chardet

encoding = chardet.detect(b"-VkgXhFf6sAEcAwrC6YR-SZbiuSb8ABXeQuvhcGSQzY=")["encoding"]

print(encoding)
