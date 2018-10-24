
if exist "../4_profit_sheet.zip" (
  if exist "../4_profit_sheet" (
  rmdir /s /q "../4_profit_sheet"
  ) else (
  echo "folder not exist!"
  )
) else (
  echo "zip file not exist!"
)
pause
