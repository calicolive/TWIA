import { Component, Show } from 'solid-js';
import { createServerAction$, redirect } from 'solid-start/server';
import { email } from '~/utils/email';
import Spinner from './Spinner';
import { FormError } from 'solid-start';

const EmailSignup: Component<{}> = (props) => {
  const [subscribe, { Form }] = createServerAction$(
    async (form: FormData): Promise<string | any> => {
      const emailAddress = form.get('email') as string;
      const validatedEmail = email.safeParse(emailAddress);

      if (!validatedEmail.success) {
        const error = validatedEmail.error.issues[0].message;
        throw new FormError(error);
      }
      const data = {
        api_key: import.meta.env.VITE_EMAIL_OCTOPUS_API_KEY,
        email_address: validatedEmail.data,
      };
      const response = await fetch(
        `https://emailoctopus.com/api/1.6/lists/${
          import.meta.env.VITE_EMAIL_OCTOPUS_LIST_ID
        }/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      return redirect(`/confirmation/${validatedEmail.data}}`);
    }
  );

  return (
    <div>
      <Form class='mx-auto mt-10 flex max-w-md gap-x-4'>
        <label for='email-address' class='sr-only'>
          Email address
        </label>
        <input
          required
          type='email'
          id='email-address'
          name='email'
          autocomplete='email'
          class=' min-w-0 flex-auto rounded-md border-0 bg-indigo-500/5 px-3.5 py-2 text-zinc-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
          placeholder='Enter your email'
        />
        <button
          disabled={subscribe.pending}
          type='submit'
          class='flex w-24 flex-none justify-center rounded-md bg-indigo-500 bg-grain px-3.5 py-2.5 text-sm font-semibold text-zinc-50 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
          <Show when={subscribe.pending} fallback='Sign Up'>
            <Spinner />
          </Show>
        </button>
      </Form>
      <Show when={subscribe.error}>
        <p class='mt-4 flex justify-center text-sm text-zinc-50'>
          {subscribe.error.message}
        </p>
      </Show>
    </div>
  );
};

export default EmailSignup;
