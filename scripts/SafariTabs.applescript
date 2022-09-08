on execute(draft)
    
tell application "Safari"	set intWinCount to number of windows	set strOutput to ""	repeat with intWin from 1 to intWinCount		set intTabCount to number of tabs in window intWin		set strOutput to strOutput & "# WINDOW[" & intWin & "]" & linefeed as string		repeat with intTab from 1 to intTabCount			set strTabName to name of tab intTab of window intWin			set strTabURL to URL of tab intTab of window intWin			set strOutput to strOutput & "- [" & strTabName & "](" & strTabURL & ")\n" as string		end repeat	end repeatend tellreturn strOutput

end execute