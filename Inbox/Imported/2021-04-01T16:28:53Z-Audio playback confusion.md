# Audio playback confusion
At this point, I’m surprised Apple hasn’t just configured iOS to respond to audio playback identically to MacOS - that is, allowing multiple audio sources to play at once without interrupting one another. ::I would like to know how Android handles this, actually.:: With the possible exception of opening a camera application (or not really, actually,) there is no reason to interrupt Apple Music, Bandcamp, Soundcloud, or a simple audio stream in a browser - *especially* when the device is unlocked and in use.

> Most apps rely on the system’s default interruption behavior. However, beginning in iOS 14.5, AVAudioSession provides ways to customize the default behavior to better accommodate your app’s needs:  
> * Recent iPad models provide a feature that mutes the built-in microphone at the hardware level when the user closes the device’s Smart Folio cover. If your app plays and records audio, you may want to continue playback even if the system mutes the microphone. You can disable the default interruption behavior by setting the overrideMutedMicrophoneInterruption option when configuring your audio session.  
> * System alerts, such as receiving an incoming phone call, interrupt the active audio session. If you prefer that the system not interrupt your app’s audio session in these cases, you can indicate this preference by setting a value for the setPrefersNoInterruptionsFromSystemAlerts(_:) method.  
-[Responding to Audio Session Interruptions](https://developer.apple.com/documentation/avfaudio/avaudiosession/responding_to_audio_session_interruptions) | Apple Developer Documentation

([My Post on r/iOSBeta](https://reddit.com/r/iOSBeta/comments/lx890l/audio_playback_interruption_going_forward/))

#i #documentation