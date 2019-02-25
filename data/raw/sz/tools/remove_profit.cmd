
if exist "../4_profit.zip" (
  if exist "../4_profit" (
  rmdir /s /q "../4_profit"
  ) else (
  echo "folder not exist!"
  )
) else (
  echo "zip file not exist!"
)
pause
