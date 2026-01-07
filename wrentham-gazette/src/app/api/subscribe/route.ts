import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // In production, this would save to Supabase
    // For now, we'll just log and return success
    console.log('Newsletter signup:', email);

    // TODO: Add Supabase integration
    // const { error } = await supabase
    //   .from('newsletter_subscribers')
    //   .insert({ email });
    
    // if (error) {
    //   if (error.code === '23505') {
    //     return NextResponse.json(
    //       { error: 'This email is already subscribed' },
    //       { status: 400 }
    //     );
    //   }
    //   throw error;
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
