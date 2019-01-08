
if exist "../2_dividents.zip" (
  if exist "../2_dividents" (
  rmdir /s /q "../2_dividents"
  ) else (
  echo "folder not exist!"
  )
) else (
  echo "zip file not exist!"
)
pause
