export enum AnalyticsEvent {
  SIGN_UP_STARTED = 'sign_up_started',
  SIGN_UP_COMPLETED = 'sign_up_completed',
  SIGN_IN_STARTED = 'sign_in_started',
  SIGN_IN_COMPLETED = 'sign_in_completed',
  PASSWORD_RESET_REQUESTED = 'password_reset_requested'
}

export class Analytics {
  static track(event: AnalyticsEvent, properties?: Record<string, any>) {
    // In a real application, integrate with your analytics provider
    console.log('Analytics event:', event, properties);
  }

  static identify(userId: string, traits?: Record<string, any>) {
    console.log('Analytics identify:', userId, traits);
  }

  static page(name: string, properties?: Record<string, any>) {
    console.log('Analytics page view:', name, properties);
  }
}