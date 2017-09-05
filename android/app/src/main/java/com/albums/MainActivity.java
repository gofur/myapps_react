package com.albums;
import android.app.Activity;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    public static Activity activity;
    @Override
    protected String getMainComponentName() {
        activity = this;
        return "albums";
    }
}
