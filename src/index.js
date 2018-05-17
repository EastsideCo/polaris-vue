
import styles from './resources/styles/styles.css'; // eslint-disable-line no-unused-vars

import PolarisAccountConnection from './components/PolarisAccountConnection.vue';
import PolarisActionList from './components/PolarisActionList.vue';
import PolarisButton from './components/PolarisButton.vue';
import PolarisButtonGroup from './components/PolarisButtonGroup.vue';
import PolarisSettingToggle from './components/PolarisSettingToggle.vue';

import PolarisAvatar from './components/PolarisAvatar.vue';
import PolarisBadge from './components/PolarisBadge.vue';
import PolarisIcon from './components/PolarisIcon.vue';
import PolarisKeyboardKey from './components/PolarisKeyboardKey.vue';
import PolarisThumbnail from './components/PolarisThumbnail.vue';

import PolarisBanner from './components/PolarisBanner.vue';
import PolarisSpinner from './components/PolarisSpinner.vue';
import PolarisProgressBar from './components/PolarisProgressBar.vue';

import PolarisCalloutCard from './components/PolarisCalloutCard.vue';
import PolarisCard from './components/PolarisCard.vue';
import PolarisEmptyState from './components/PolarisEmptyState.vue';
import PolarisLayout from './components/PolarisLayout.vue';
import PolarisPage from './components/PolarisPage.vue';
import PolarisPageActions from './components/PolarisPageActions.vue';
import PolarisStack from './components/PolarisStack.vue';

import PolarisCaption from './components/PolarisCaption.vue';
import PolarisDisplayText from './components/PolarisDisplayText.vue';
import PolarisFooterHelp from './components/PolarisFooterHelp.vue';
import PolarisHeading from './components/PolarisHeading.vue';
import PolarisSubheading from './components/PolarisSubheading.vue';
import PolarisVisuallyHidden from './components/PolarisVisuallyHidden.vue';

import PolarisSkeletonBodyText from './components/PolarisSkeletonBodyText.vue';
import PolarisSkeletonDisplayText from './components/PolarisSkeletonDisplayText.vue';
import PolarisSkeletonPage from './components/PolarisSkeletonPage.vue';

import PolarisCheckbox from './components/PolarisCheckbox.vue';
import PolarisChoiceList from './components/PolarisChoiceList.vue';
import PolarisColorPicker from './components/PolarisColorPicker.vue';
import PolarisDatePicker from './components/PolarisDatePicker.vue';
import PolarisFormLayout from './components/PolarisFormLayout.vue';
import PolarisFormLayoutGroup from './components/PolarisFormLayoutGroup.vue';
import PolarisRadioButton from './components/PolarisRadioButton.vue';
import PolarisSelect from './components/PolarisSelect.vue';
import PolarisTag from './components/PolarisTag.vue';
import PolarisTextField from './components/PolarisTextField.vue';

import PolarisCollapsible from './components/PolarisCollapsible.vue';
import PolarisScrollable from './components/PolarisScrollable.vue';

import PolarisDescriptionList from './components/PolarisDescriptionList.vue';
import PolarisList from './components/PolarisList.vue';
import PolarisListItem from './components/PolarisListItem.vue';
import PolarisResourceList from './components/PolarisResourceList.vue';
import PolarisResourceListItem from './components/PolarisResourceListItem.vue';

import PolarisLink from './components/PolarisLink.vue';
import PolarisPagination from './components/PolarisPagination.vue';
import PolarisTabs from './components/PolarisTabs.vue';

import PolarisPopover from './components/PolarisPopover.vue';


import PolarisTextStyle from './components/PolarisTextStyle.vue';
import PolarisSettingAction from './components/PolarisSettingAction.vue';
import PolarisImage from './components/PolarisImage.vue';
import PolarisTextContainer from './components/PolarisTextContainer.vue';
import PolarisBreadcrumbs from './components/PolarisBreadcrumbs.vue';
import PolarisUnstyledLink from './components/PolarisUnstyledLink.vue';

import PolarisStackItem from './components/PolarisStackItem.vue';
import PolarisCardSection from './components/PolarisCardSection.vue';
import PolarisLayoutSection from './components/PolarisLayoutSection.vue';
import PolarisButtonGroupItem from './components/PolarisButtonGroupItem.vue';
import PolarisLayoutAnnotatedSection from './components/PolarisLayoutAnnotatedSection.vue';


import PolarisVueFadeTransition from './components/transitions/FadeTransition.vue';
import PolarisVueFadeUpTransition from './components/transitions/FadeUpTransition.vue';
import PolarisVueCollapseTransition from './components/transitions/CollapseTransition.vue';

import ComponentHelpers from './ComponentHelpers.js';

import config from 'config/config.js';
import log from 'util/log.js';
import ConsoleLogger from 'util/loggers/ConsoleLogger.js';

const TAG = 'Bootstrap';

// Configure logging
const logger = new ConsoleLogger;
if (!config.debug) {
    logger.setLogLevel(log.WARN)
}
log.addLogger(logger);
log.send(log.DEBUG, TAG, 'Initialized logging.');



export default {
    install(Vue, options) {
        const defaults = {
            componentNameFormat: (polarisName, changeCase) => {
                return 'polaris-'+changeCase.paramCase(polarisName);
            }
        };
        options = Object.assign(defaults, options);

        ComponentHelpers.setComponentNameFormat(options.componentNameFormat);


        log.send(log.DEBUG, TAG, 'Installing...');

        const components = {
            // Main components
            AccountConnection:      PolarisAccountConnection,
            ActionList:             PolarisActionList,
            Button:                 PolarisButton,
            ButtonGroup:            PolarisButtonGroup,
            SettingToggle:          PolarisSettingToggle,

            Avatar:                 PolarisAvatar,
            Badge:                  PolarisBadge,
            Icon:                   PolarisIcon,
            KeyboardKey:            PolarisKeyboardKey,
            Thumbnail:              PolarisThumbnail,

            Banner:                 PolarisBanner,
            Spinner:                PolarisSpinner,
            ProgressBar:            PolarisProgressBar,

            CalloutCard:            PolarisCalloutCard,
            Card:                   PolarisCard,
            EmptyState:             PolarisEmptyState,
            Layout:                 PolarisLayout,
            Page:                   PolarisPage,
            PageActions:            PolarisPageActions,
            Stack:                  PolarisStack,

            Heading:                PolarisHeading,
            Subheading:             PolarisSubheading,
            Caption:                PolarisCaption,
            DisplayText:            PolarisDisplayText,
            FooterHelp:             PolarisFooterHelp,
            VisuallyHidden:         PolarisVisuallyHidden,

            SkeletonBodyText:       PolarisSkeletonBodyText,
            SkeletonDisplayText:    PolarisSkeletonDisplayText,
            SkeletonPage:           PolarisSkeletonPage,

            Checkbox:               PolarisCheckbox,
            ChoiceList:             PolarisChoiceList,
            ColorPicker:            PolarisColorPicker,
            DatePicker:             PolarisDatePicker,
            FormLayout:             PolarisFormLayout,
            FormLayoutGroup:        PolarisFormLayoutGroup,
            RadioButton:            PolarisRadioButton,
            Select:                 PolarisSelect,
            Tag:                    PolarisTag,
            TextField:              PolarisTextField,

            Collapsible:            PolarisCollapsible,
            Scrollable:             PolarisScrollable,

            DescriptionList:        PolarisDescriptionList,
            List:                   PolarisList,
            ListItem:               PolarisListItem,
            ResourceList:           PolarisResourceList,
            ResourceListItem:       PolarisResourceListItem,

            Link:                   PolarisLink,
            Pagination:             PolarisPagination,
            Tabs:                   PolarisTabs,

            Popover:                PolarisPopover,


            // Not in main docs
            TextStyle:              PolarisTextStyle,
            SettingAction:          PolarisSettingAction,
            Image:                  PolarisImage,
            TextContainer:          PolarisTextContainer,
            Breadcrumbs:            PolarisBreadcrumbs,
            UnstyledLink:           PolarisUnstyledLink,

            // Added by polaris-vue
            StackItem:              PolarisStackItem,
            CardSection:            PolarisCardSection,
            LayoutSection:          PolarisLayoutSection,
            LayoutAnnotatedSection: PolarisLayoutAnnotatedSection,
            ButtonGroupItem:        PolarisButtonGroupItem,

            VueFadeTransition:      PolarisVueFadeTransition,
            VueFadeUpTransition:    PolarisVueFadeUpTransition,
            VueCollapseTransition:  PolarisVueCollapseTransition,
        };

        var count = 0;
        for (var polarisName in components) {
            var componentName = ComponentHelpers.getComponentName(polarisName);
            Vue.component(componentName, components[polarisName]);
            count++;
            log.send(log.DEBUG, TAG, componentName + ' -> ' + polarisName);
        }

        log.send(log.DEBUG, TAG, 'Installed '+count+' components.');
    }
};
