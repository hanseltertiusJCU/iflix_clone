<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    width="460"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="profile-picture-container" v-bind="attrs" v-on="on">
        <v-icon color="#ff4a22" size="36">mdi-account-circle</v-icon>
      </div>
    </template>

    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <div class="close-dialog-button-icon" @click="onProfileDialogClosed">
          <v-icon>mdi-close</v-icon>
        </div>
      </v-card-title>

      <v-card-text>
        <div v-if="showSignUpForm">
          <div class="sign-up-menu-container">
            <div class="back-button-sign-up-menu-container">
              <div class="back-button-icon" @click="onBackButtonClicked">
                <v-icon> mdi-chevron-left </v-icon>
              </div>
            </div>
            <div class="title-sign-up-menu-container">
              <div class="tw-font-bold">Sign Up</div>
            </div>
          </div>

          <v-form v-model="signUpFormValid">
            <v-text-field
              v-model="signUpUsernameInput"
              label=""
              :rules="rules.username"
              counter="150"
              maxLength="150"
              placeholder="Please input username"
              filled
              flat
              solo
              dense
              background-color="#f6f6f6"
            />

            <v-text-field
              v-model="signUpPasswordInput"
              label=""
              :rules="[rules.required]"
              counter="128"
              maxLength="128"
              :type="showingSignInPassword ? 'text' : 'password'"
              :append-icon="showingSignInPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showingSignInPassword = !showingSignInPassword"
              placeholder="Please input password"
              filled
              flat
              solo
              dense
              color="#ff4a22"
              background-color="#f6f6f6"
            />

            <!-- todo : first name, last name, email -->
            <v-text-field
              v-model="signUpFirstNameInput"
              label=""
              counter="30"
              maxLength="30"
              placeholder="Please input first name"
              filled
              flat
              solo
              dense
              background-color="#f6f6f6"
            />

            <v-text-field
              v-model="signUpLastNameInput"
              label=""
              counter="150"
              maxLength="150"
              placeholder="Please input last name"
              filled
              flat
              solo
              dense
              background-color="#f6f6f6"
            />

            <v-text-field
              v-model="signUpEmailAddressInput"
              label=""
              :rules="[rules.email]"
              counter="255"
              maxLength="255"
              placeholder="Please input e-mail address"
              filled
              flat
              solo
              dense
              background-color="#f6f6f6"
            />
          </v-form>
        </div>

        <div v-else>
          <v-form v-model="signInFormValid">
            <v-text-field
              v-model="signInUsernameInput"
              label=""
              :rules="[rules.required]"
              counter="150"
              maxLength="150"
              placeholder="Please input username"
              filled
              flat
              solo
              dense
              background-color="#f6f6f6"
            />

            <v-text-field
              v-model="signInPasswordInput"
              label=""
              :rules="[rules.required]"
              counter="128"
              maxLength="128"
              :type="showingSignInPassword ? 'text' : 'password'"
              :append-icon="showingSignInPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showingSignInPassword = !showingSignInPassword"
              placeholder="Please input password"
              filled
              flat
              solo
              dense
              color="#ff4a22"
              background-color="#f6f6f6"
            />
          </v-form>

          <div class="tw-text-center">
            Don't have an account?
            <span class="sign-up-button" @click="onOpenSignUpInput">
              Sign up now
            </span>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          v-if="showSignUpForm"
          :disabled="!signUpFormValid"
          @click="onSignUpButtonClicked"
          block
          color="#ff4a22"
          :class="
            signUpFormValid
              ? 'dialog-account-btn'
              : 'dialog-account-btn-disabled'
          "
          >Register</v-btn
        >
        <v-btn
          v-else
          :disabled="!signInFormValid"
          @click="onSignInButtonClicked"
          block
          color="#ff4a22"
          :class="
            signInFormValid
              ? 'dialog-account-btn'
              : 'dialog-account-btn-disabled'
          "
          >Log in</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required",
        email: (value) => {
          const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          const validEmailValue = !value || pattern.test(value);

          return validEmailValue || "E-mail must be valid";
        },
        username: [
          (value) => {
            const pattern = /^[a-zA-Z0-9@.+-_]+$/g;
            const validUserNameValue = pattern.test(value);

            return validUserNameValue || "Username must be valid";
          },
          (value) => !!value || "Required",
        ],
      },
      showProfileDialog: false,
      showingSignInPassword: false,
      showSignUpForm: false,
      signInFormValid: false,
      signUpFormValid: false,
      signInUsernameInput: "",
      signInPasswordInput: "",
      signUpUsernameInput: "",
      signUpPasswordInput: "",
      signUpFirstNameInput: "",
      signUpLastNameInput: "",
      signUpEmailAddressInput: "",
    };
  },
  methods: {
    onProfileDialogClosed() {
      this.onResetSignInValue();
      this.onResetSignUpValue();
      this.showSignUpForm = false;
      this.$emit("input", false);
    },
    onBackButtonClicked() {
      this.onResetSignUpValue();
      this.showSignUpForm = false;
    },
    onOpenSignUpInput() {
      this.onResetSignInValue();
      this.showSignUpForm = true;
    },
    // on reset sign in value
    onResetSignInValue() {
      this.signInUsernameInput = "";
      this.signInPasswordInput = "";
      this.signInFormValid = false;
      this.showingSignInPassword = false;
    },
    // on reset sign up value
    onResetSignUpValue() {
      this.signUpUsernameInput = "";
      this.signUpPasswordInput = "";
      this.signUpFirstNameInput = "";
      this.signUpLastNameInput = "";
      this.signUpEmailAddressInput = "";
      this.signUpFormValid = false;
      this.showingSignUpPassword = false;
    },
    onSignInButtonClicked() {
      console.log("sign in button clicked");
      /**
       * TODO :
       * this one should use the calling function into the axios,
       * we will use the JSON
       *
       * Method : POST
       * Endpoint : https://movie-api-sample.herokuapp.com/api/v1/user/login
       *
       * input will be an object with the attribute of :
       * "username"
       * "password"
       */
      const input = {
        username: this.signInUsernameInput,
        password: this.signInPasswordInput,
      };

      this.onResetSignInValue();
      this.showSignUpForm = false;
      this.$emit("sign-in-clicked", input);
      this.$emit("input", false);
    },
    onSignUpButtonClicked() {
      console.log("sign up button clicked");
      /**
       * TODO :
       * this one should use the calling function into the axios,
       * we will use the JSON
       *
       * Method : POST
       * Endpoint : https://movie-api-sample.herokuapp.com/api/v1/user/register
       *
       * input will be an object with the attribute of :
       * "username"
       * "password"
       * "first_name"
       * "last_name"
       * "email"
       */
      const input = {
        username: this.signUpUsernameInput,
        password: this.signUpPasswordInput,
        first_name: this.signUpFirstNameInput,
        last_name: this.signUpLastNameInput,
        email: this.signUpEmailAddressInput,
      };

      this.onResetSignUpValue();
      this.showSignUpForm = false;
      this.$emit("sign-up-clicked", input);
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="postcss">
.v-btn {
  text-transform: none;
  letter-spacing: 0;
}

.v-btn__content {
  color: white;
}

.dialog-account-btn {
  opacity: 1;
}

.dialog-account-btn-disabled {
  opacity: 0.2;
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #ff4a21 !important;
  color: #fff !important;
}

.sign-up-menu-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-mb-6;
}

.back-button-sign-up-menu-container {
  @apply tw-flex-none;
}

.title-sign-up-menu-container {
  @apply tw-flex-1;
  text-align: center;
}

.sign-up-button {
  color: #ff4a22;
}

.sign-up-button:hover {
  color: #ff4a22 !important;
  cursor: pointer;
}

.back-button-icon:hover,
.close-dialog-button-icon:hover,
.profile-picture-container:hover {
  cursor: pointer;
}
</style>