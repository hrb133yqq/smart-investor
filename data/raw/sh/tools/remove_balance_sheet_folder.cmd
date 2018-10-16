
if exist "../3_balance_sheet.zip" (
  if exist "../3_balance_sheet" (
  rmdir /s /q "../3_balance_sheet"
  ) else (
  echo "folder not exist!"
  )
) else (
  echo "zip file not exist!"
)
pause
