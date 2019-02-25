
if exist "../3_balance.zip" (
  if exist "../3_balance" (
  rmdir /s /q "../3_balance"
  ) else (
  echo "folder not exist!"
  )
) else (
  echo "zip file not exist!"
)
pause
