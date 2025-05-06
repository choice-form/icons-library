import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './icons/Workspace';
import { WorkspaceUploadComponent } from './icons/WorkspaceUpload';
import { WorkspaceTemplateComponent } from './icons/WorkspaceTemplate';
import { WorkspaceTemplateRemoveComponent } from './icons/WorkspaceTemplateRemove';
import { WorkspaceTemplateEditComponent } from './icons/WorkspaceTemplateEdit';
import { WorkspaceTemplateConvertComponent } from './icons/WorkspaceTemplateConvert';
import { WorkspaceTemplateAddComponent } from './icons/WorkspaceTemplateAdd';
import { WorkspaceSettingsComponent } from './icons/WorkspaceSettings';
import { WorkspaceDownloadComponent } from './icons/WorkspaceDownload';
import { WorkspaceDeleteComponent } from './icons/WorkspaceDelete';
import { WorkspaceAddComponent } from './icons/WorkspaceAdd';
import { ModuleWorkflowComponent } from './icons/ModuleWorkflow';
import { ModuleFormsComponent } from './icons/ModuleForms';
import { ModuleDatasheetsComponent } from './icons/ModuleDatasheets';
import { ModuleChartsComponent } from './icons/ModuleCharts';
import { AppearanceComponent } from './icons/Appearance';
import { WelcomeWorkflowComponent } from './icons/WelcomeWorkflow';
import { WelcomeInterfaceComponent } from './icons/WelcomeInterface';
import { WelcomeFormsComponent } from './icons/WelcomeForms';
import { WelcomeExtensionComponent } from './icons/WelcomeExtension';
import { WelcomeDatasheetsComponent } from './icons/WelcomeDatasheets';
import { WelcomeChartsComponent } from './icons/WelcomeCharts';
import { WorkflowFileComponent } from './icons/WorkflowFile';
import { WorkflowFileOutportComponent } from './icons/WorkflowFileOutport';
import { WorkflowFileImportComponent } from './icons/WorkflowFileImport';
import { WorkflowFileDeleteComponent } from './icons/WorkflowFileDelete';
import { WorkflowFileAddComponent } from './icons/WorkflowFileAdd';
import { TriggerStartedByWebhookComponent } from './icons/TriggerStartedByWebhook';
import { TriggerStartedByDateOrTimeFieldComponent } from './icons/TriggerStartedByDateOrTimeField';
import { TriggerStartedByAnEventComponent } from './icons/TriggerStartedByAnEvent';
import { TriggerStartedByAButtonComponent } from './icons/TriggerStartedByAButton';
import { TriggerStartedAtASpecificTimeComponent } from './icons/TriggerStartedAtASpecificTime';
import { TriggerConnectorEventComponent } from './icons/TriggerConnectorEvent';
import { ToolbarTriggerComponent } from './icons/ToolbarTrigger';
import { ToolbarAllComponent } from './icons/ToolbarAll';
import { ToolbarActionComponent } from './icons/ToolbarAction';
import { SystemComponent } from './icons/System';
import { RefreshErrorComponent } from './icons/RefreshError';
import { RefreshAllComponent } from './icons/RefreshAll';
import { ReferenceLineComponent } from './icons/ReferenceLine';
import { PublishComponent } from './icons/Publish';
import { PlaySolidComponent } from './icons/PlaySolid';
import { PbpOutputComponent } from './icons/PbpOutput';
import { PbpInputComponent } from './icons/PbpInput';
import { PackagedComponent } from './icons/Packaged';
import { PackagedOutportComponent } from './icons/PackagedOutport';
import { PackagedImportComponent } from './icons/PackagedImport';
import { PackagedAddComponent } from './icons/PackagedAdd';
import { HistotyListComponent } from './icons/HistotyList';
import { FitScreenComponent } from './icons/FitScreen';
import { DuplicateSolidComponent } from './icons/DuplicateSolid';
import { CircleUnpassedSolidComponent } from './icons/CircleUnpassedSolid';
import { CircleSuccessSolidComponent } from './icons/CircleSuccessSolid';
import { CircleSkipSolidComponent } from './icons/CircleSkipSolid';
import { CirclePlaySolidComponent } from './icons/CirclePlaySolid';
import { CirclePauseSolidComponent } from './icons/CirclePauseSolid';
import { CircleErrorSolidComponent } from './icons/CircleErrorSolid';
import { BoltComponent } from './icons/Bolt';
import { BoltSolidComponent } from './icons/BoltSolid';
import { BinSolidComponent } from './icons/BinSolid';
import { AutoLayoutComponent } from './icons/AutoLayout';
import { AddBranchSolidComponent } from './icons/AddBranchSolid';
import { ActionWebhookComponent } from './icons/ActionWebhook';
import { ActionWaitForSomeTimeComponent } from './icons/ActionWaitForSomeTime';
import { ActionUpdateRecordComponent } from './icons/ActionUpdateRecord';
import { ActionPathComponent } from './icons/ActionPath';
import { ActionPackagedNodeComponent } from './icons/ActionPackagedNode';
import { ActionNotificationComponent } from './icons/ActionNotification';
import { ActionIfComponent } from './icons/ActionIf';
import { ActionHttpRequestComponent } from './icons/ActionHttpRequest';
import { ActionGetSegmentFiltersComponent } from './icons/ActionGetSegmentFilters';
import { ActionGetRecordsFromWebhookComponent } from './icons/ActionGetRecordsFromWebhook';
import { ActionGetRecordsFromLinkedRecordsComponent } from './icons/ActionGetRecordsFromLinkedRecords';
import { ActionGetRecordsFromCodeBlockComponent } from './icons/ActionGetRecordsFromCodeBlock';
import { ActionGetRecordsFromANodeComponent } from './icons/ActionGetRecordsFromANode';
import { ActionGetRecordsFromADatasheetComponent } from './icons/ActionGetRecordsFromADatasheet';
import { ActionGetOneRecordFromLinkedRecordsComponent } from './icons/ActionGetOneRecordFromLinkedRecords';
import { ActionGetOneRecordFromADatasheetComponent } from './icons/ActionGetOneRecordFromADatasheet';
import { ActionFormulaNodeComponent } from './icons/ActionFormulaNode';
import { ActionDeleteRecordComponent } from './icons/ActionDeleteRecord';
import { ActionDateNodeComponent } from './icons/ActionDateNode';
import { ActionCreateRecordComponent } from './icons/ActionCreateRecord';
import { ActionConnectorRequestNodeComponent } from './icons/ActionConnectorRequestNode';
import { ActionCodeBlockComponent } from './icons/ActionCodeBlock';
import { WecomComponent } from './icons/Wecom';
import { WecomColorComponent } from './icons/WecomColor';
import { WechatComponent } from './icons/Wechat';
import { WechatPublicComponent } from './icons/WechatPublic';
import { TeamsColorComponent } from './icons/TeamsColor';
import { SlackComponent } from './icons/Slack';
import { SlackColorComponent } from './icons/SlackColor';
import { GoogleComponent } from './icons/Google';
import { GoogleDriveColorComponent } from './icons/GoogleDriveColor';
import { GoogleColorComponent } from './icons/GoogleColor';
import { GithubComponent } from './icons/Github';
import { FeishuComponent } from './icons/Feishu';
import { FeishuColorComponent } from './icons/FeishuColor';
import { DingdingComponent } from './icons/Dingding';
import { DingdingColorComponent } from './icons/DingdingColor';
import { ChoiceformComponent } from './icons/Choiceform';
import { ChoiceformColorComponent } from './icons/ChoiceformColor';
import { WarningPublishFailComponent } from './icons/WarningPublishFail';
import { WarningNotFoundComponent } from './icons/WarningNotFound';
import { WarningLinkExpiredComponent } from './icons/WarningLinkExpired';
import { WarningFileBrokenComponent } from './icons/WarningFileBroken';
import { EmptyWorkspaceComponent } from './icons/EmptyWorkspace';
import { EmptyWorkflowComponent } from './icons/EmptyWorkflow';
import { EmptyWorkflowNodeComponent } from './icons/EmptyWorkflowNode';
import { EmptyUserComponent } from './icons/EmptyUser';
import { EmptyTrashComponent } from './icons/EmptyTrash';
import { EmptySurveyComponent } from './icons/EmptySurvey';
import { EmptySortComponent } from './icons/EmptySort';
import { EmptySearchComponent } from './icons/EmptySearch';
import { EmptyOrganizationsComponent } from './icons/EmptyOrganizations';
import { EmptyNotificationsComponent } from './icons/EmptyNotifications';
import { EmptyNoAuthorityComponent } from './icons/EmptyNoAuthority';
import { EmptyLogicComponent } from './icons/EmptyLogic';
import { EmptyImageComponent } from './icons/EmptyImage';
import { EmptyGroupComponent } from './icons/EmptyGroup';
import { EmptyFolderComponent } from './icons/EmptyFolder';
import { EmptyFilterComponent } from './icons/EmptyFilter';
import { EmptyFileComponent } from './icons/EmptyFile';
import { EmptyDynamicComponent } from './icons/EmptyDynamic';
import { EmptyDatabaseComponent } from './icons/EmptyDatabase';
import { EmptyDataComponent } from './icons/EmptyData';
import { EmptyConnectorComponent } from './icons/EmptyConnector';
import { EmptyChartComponent } from './icons/EmptyChart';
import { YesNoComponent } from './icons/YesNo';
import { WelcomeComponent } from './icons/Welcome';
import { WebsiteComponent } from './icons/Website';
import { UrlRedirectComponent } from './icons/UrlRedirect';
import { ToolbarScreenAspectVerticalSolidComponent } from './icons/ToolbarScreenAspectVerticalSolid';
import { ToolbarScreenAspectVerticalRegularComponent } from './icons/ToolbarScreenAspectVerticalRegular';
import { ToolbarScreenAspectSquareSolidComponent } from './icons/ToolbarScreenAspectSquareSolid';
import { ToolbarScreenAspectSquareRegularComponent } from './icons/ToolbarScreenAspectSquareRegular';
import { ToolbarScreenAspectHorizontalSolidComponent } from './icons/ToolbarScreenAspectHorizontalSolid';
import { ToolbarScreenAspectHorizontalRegularComponent } from './icons/ToolbarScreenAspectHorizontalRegular';
import { ToolbarPreviewSolidComponent } from './icons/ToolbarPreviewSolid';
import { ToolbarPreviewRegularComponent } from './icons/ToolbarPreviewRegular';
import { ToolbarCreateSolidComponent } from './icons/ToolbarCreateSolid';
import { ToolbarCreateRegularComponent } from './icons/ToolbarCreateRegular';
import { StatementComponent } from './icons/Statement';
import { ShortTextComponent } from './icons/ShortText';
import { SettingsSolidComponent } from './icons/SettingsSolid';
import { SettingsRegularComponent } from './icons/SettingsRegular';
import { RoundedSmallComponent } from './icons/RoundedSmall';
import { RoundedNoneComponent } from './icons/RoundedNone';
import { RoundedMediumComponent } from './icons/RoundedMedium';
import { RoundedFullComponent } from './icons/RoundedFull';
import { RatingComponent } from './icons/Rating';
import { RatingThumbUpSolidComponent } from './icons/RatingThumbUpSolid';
import { RatingThumbUpRegularComponent } from './icons/RatingThumbUpRegular';
import { RatingStarSolidComponent } from './icons/RatingStarSolid';
import { RatingSmileSolidComponent } from './icons/RatingSmileSolid';
import { RatingSmileRegularComponent } from './icons/RatingSmileRegular';
import { RatingShapeRegularComponent } from './icons/RatingShapeRegular';
import { RatingHeartSolidComponent } from './icons/RatingHeartSolid';
import { RatingHeartRegularComponent } from './icons/RatingHeartRegular';
import { RankingComponent } from './icons/Ranking';
import { PictureChoiceComponent } from './icons/PictureChoice';
import { PhoneComponent } from './icons/Phone';
import { OpinionScaleComponent } from './icons/OpinionScale';
import { MultipleChoiceComponent } from './icons/MultipleChoice';
import { MatrixComponent } from './icons/Matrix';
import { LongTextComponent } from './icons/LongText';
import { LogicSolidComponent } from './icons/LogicSolid';
import { LogicRegularComponent } from './icons/LogicRegular';
import { LayoutWallpaperComponent } from './icons/LayoutWallpaper';
import { LayoutTopRightComponent } from './icons/LayoutTopRight';
import { LayoutTopLeftComponent } from './icons/LayoutTopLeft';
import { LayoutStackComponent } from './icons/LayoutStack';
import { LayoutSplitRightComponent } from './icons/LayoutSplitRight';
import { LayoutSplitLeftComponent } from './icons/LayoutSplitLeft';
import { LayoutFloatRightComponent } from './icons/LayoutFloatRight';
import { LayoutFloatLeftComponent } from './icons/LayoutFloatLeft';
import { LayoutBottomRightComponent } from './icons/LayoutBottomRight';
import { LayoutBottomLeftComponent } from './icons/LayoutBottomLeft';
import { GroupComponent } from './icons/Group';
import { FormComponent } from './icons/Form';
import { FormFileComponent } from './icons/FormFile';
import { FormDeleteComponent } from './icons/FormDelete';
import { FormAddComponent } from './icons/FormAdd';
import { EndedComponent } from './icons/Ended';
import { EmbedTypeStandardComponent } from './icons/EmbedTypeStandard';
import { EmbedTypeSliderComponent } from './icons/EmbedTypeSlider';
import { EmbedTypeSideTabComponent } from './icons/EmbedTypeSideTab';
import { EmbedTypePopupComponent } from './icons/EmbedTypePopup';
import { EmbedTypePopoverComponent } from './icons/EmbedTypePopover';
import { EmbedTypeFullPageComponent } from './icons/EmbedTypeFullPage';
import { DropdownComponent } from './icons/Dropdown';
import { DesignSolidComponent } from './icons/DesignSolid';
import { DesignRegularComponent } from './icons/DesignRegular';
import { DateComponent } from './icons/Date';
import { CreateSolidComponent } from './icons/CreateSolid';
import { CreateRegularComponent } from './icons/CreateRegular';
import { ContactinfoComponent } from './icons/Contactinfo';
import { CollectorComponent } from './icons/Collector';
import { CollectorRemoveComponent } from './icons/CollectorRemove';
import { CollectorAddComponent } from './icons/CollectorAdd';
import { CollectorActiveComponent } from './icons/CollectorActive';
import { AlignmentRightComponent } from './icons/AlignmentRight';
import { AlignmentLeftComponent } from './icons/AlignmentLeft';
import { AlignmentCenterComponent } from './icons/AlignmentCenter';
import { AddressComponent } from './icons/Address';
import { FolderComponent } from './icons/Folder';
import { FolderSettingsComponent } from './icons/FolderSettings';
import { FolderRemoveComponent } from './icons/FolderRemove';
import { FolderPlusComponent } from './icons/FolderPlus';
import { FolderPenComponent } from './icons/FolderPen';
import { FolderOpenComponent } from './icons/FolderOpen';
import { FolderLockComponent } from './icons/FolderLock';
import { FolderInputComponent } from './icons/FolderInput';
import { FolderDeleteComponent } from './icons/FolderDelete';
import { FolderClosedComponent } from './icons/FolderClosed';
import { FileComponent } from './icons/File';
import { FileUploadComponent } from './icons/FileUpload';
import { FileTreeComponent } from './icons/FileTree';
import { FileSubComponent } from './icons/FileSub';
import { FileShareComponent } from './icons/FileShare';
import { FileSettingsComponent } from './icons/FileSettings';
import { FileRefreshComponent } from './icons/FileRefresh';
import { FileMoveComponent } from './icons/FileMove';
import { FileImportComponent } from './icons/FileImport';
import { FileExportComponent } from './icons/FileExport';
import { FileEditComponent } from './icons/FileEdit';
import { FileDuplicateComponent } from './icons/FileDuplicate';
import { FileDownloadComponent } from './icons/FileDownload';
import { FileDeleteComponent } from './icons/FileDelete';
import { FileClearComponent } from './icons/FileClear';
import { FileAddComponent } from './icons/FileAdd';
import { SpeechlessComponent } from './icons/Speechless';
import { SmileComponent } from './icons/Smile';
import { SatisfiedComponent } from './icons/Satisfied';
import { SadComponent } from './icons/Sad';
import { DeleteReactionComponent } from './icons/DeleteReaction';
import { AngryComponent } from './icons/Angry';
import { AddReactionComponent } from './icons/AddReaction';
import { ViewSmallComponent } from './icons/ViewSmall';
import { VersionComponent } from './icons/Version';
import { TagSmallComponent } from './icons/TagSmall';
import { SwatchbookComponent } from './icons/Swatchbook';
import { SwatchbookAiComponent } from './icons/SwatchbookAi';
import { ShowComponent } from './icons/Show';
import { RenameComponent } from './icons/Rename';
import { PrinterComponent } from './icons/Printer';
import { MaximizeAreaSmallComponent } from './icons/MaximizeAreaSmall';
import { ImageComponent } from './icons/Image';
import { ImageSettingsComponent } from './icons/ImageSettings';
import { ImageRemoveComponent } from './icons/ImageRemove';
import { ImageNewComponent } from './icons/ImageNew';
import { ImageImportComponent } from './icons/ImageImport';
import { ImageExportComponent } from './icons/ImageExport';
import { ImageDuplicateComponent } from './icons/ImageDuplicate';
import { ImageDeleteComponent } from './icons/ImageDelete';
import { ImageAiComponent } from './icons/ImageAi';
import { ImageAddComponent } from './icons/ImageAdd';
import { HideComponent } from './icons/Hide';
import { FillColorComponent } from './icons/FillColor';
import { ExpandSmallComponent } from './icons/ExpandSmall';
import { EditComponent } from './icons/Edit';
import { EditSmallComponent } from './icons/EditSmall';
import { EditReadonlyComponent } from './icons/EditReadonly';
import { DuplicateComponent } from './icons/Duplicate';
import { DuplicateNewComponent } from './icons/DuplicateNew';
import { DeleteKeySmallComponent } from './icons/DeleteKeySmall';
import { CopySmallComponent } from './icons/CopySmall';
import { CollapseLayersComponent } from './icons/CollapseLayers';
import { FieldTypeUserComponent } from './icons/FieldTypeUser';
import { FieldTypeUrlComponent } from './icons/FieldTypeUrl';
import { FieldTypeTimeComponent } from './icons/FieldTypeTime';
import { FieldTypeTextComponent } from './icons/FieldTypeText';
import { FieldTypeSystemUserComponent } from './icons/FieldTypeSystemUser';
import { FieldTypeSystemIdComponent } from './icons/FieldTypeSystemId';
import { FieldTypeSystemDateComponent } from './icons/FieldTypeSystemDate';
import { FieldTypeSingleSelectComponent } from './icons/FieldTypeSingleSelect';
import { FieldTypeSelectAiComponent } from './icons/FieldTypeSelectAi';
import { FieldTypeRatingComponent } from './icons/FieldTypeRating';
import { FieldTypePrimaryComponent } from './icons/FieldTypePrimary';
import { FieldTypePhoneComponent } from './icons/FieldTypePhone';
import { FieldTypePercentComponent } from './icons/FieldTypePercent';
import { FieldTypeNumberComponent } from './icons/FieldTypeNumber';
import { FieldTypeMultiSelectComponent } from './icons/FieldTypeMultiSelect';
import { FieldTypeMailComponent } from './icons/FieldTypeMail';
import { FieldTypeLookupComponent } from './icons/FieldTypeLookup';
import { FieldTypeLongTextComponent } from './icons/FieldTypeLongText';
import { FieldTypeLongTextAiComponent } from './icons/FieldTypeLongTextAi';
import { FieldTypeLockComponent } from './icons/FieldTypeLock';
import { FieldTypeLinkedComponent } from './icons/FieldTypeLinked';
import { FieldTypeLinkedAiComponent } from './icons/FieldTypeLinkedAi';
import { FieldTypeFormulaComponent } from './icons/FieldTypeFormula';
import { FieldTypeFilterComponent } from './icons/FieldTypeFilter';
import { FieldTypeDateComponent } from './icons/FieldTypeDate';
import { FieldTypeDateAndTimeComponent } from './icons/FieldTypeDateAndTime';
import { FieldTypeCurrencyComponent } from './icons/FieldTypeCurrency';
import { FieldTypeCountComponent } from './icons/FieldTypeCount';
import { FieldTypeCheckboxComponent } from './icons/FieldTypeCheckbox';
import { FieldTypeButtonComponent } from './icons/FieldTypeButton';
import { FieldTypeAutoNumberComponent } from './icons/FieldTypeAutoNumber';
import { FieldTypeAttachmentComponent } from './icons/FieldTypeAttachment';
import { FieldTypeArrayComponent } from './icons/FieldTypeArray';
import { FieldTypeAiComponent } from './icons/FieldTypeAi';
import { VisibleComponent } from './icons/Visible';
import { ViewportComponent } from './icons/Viewport';
import { VariablesStringComponent } from './icons/VariablesString';
import { VariablesNumberComponent } from './icons/VariablesNumber';
import { VariablesEnumComponent } from './icons/VariablesEnum';
import { VariablesColorComponent } from './icons/VariablesColor';
import { VariablesBooleanComponent } from './icons/VariablesBoolean';
import { VariableComponent } from './icons/Variable';
import { UnlockAspectRatioComponent } from './icons/UnlockAspectRatio';
import { TransformsScaleComponent } from './icons/TransformsScale';
import { TransformsRotateComponent } from './icons/TransformsRotate';
import { TransformsPerspectiveComponent } from './icons/TransformsPerspective';
import { TransformsDepthComponent } from './icons/TransformsDepth';
import { Transforms3dRotateComponent } from './icons/Transforms3dRotate';
import { ToolbarTextComponent } from './icons/ToolbarText';
import { ToolbarStarComponent } from './icons/ToolbarStar';
import { ToolbarSelectComponent } from './icons/ToolbarSelect';
import { ToolbarScaleComponent } from './icons/ToolbarScale';
import { ToolbarRectangleComponent } from './icons/ToolbarRectangle';
import { ToolbarPositionComponent } from './icons/ToolbarPosition';
import { ToolbarPolygonComponent } from './icons/ToolbarPolygon';
import { ToolbarPenToolComponent } from './icons/ToolbarPenTool';
import { ToolbarLineComponent } from './icons/ToolbarLine';
import { ToolbarImageComponent } from './icons/ToolbarImage';
import { ToolbarHandComponent } from './icons/ToolbarHand';
import { ToolbarFrameComponent } from './icons/ToolbarFrame';
import { ToolbarEllipseComponent } from './icons/ToolbarEllipse';
import { ToolbarComponentComponent } from './icons/ToolbarComponent';
import { ToolbarCommentComponent } from './icons/ToolbarComment';
import { ToolbarArrowComponent } from './icons/ToolbarArrow';
import { ToolbarAiComponent } from './icons/ToolbarAi';
import { TargetComponent } from './icons/Target';
import { SubIndicatorDotComponent } from './icons/SubIndicatorDot';
import { StylesComponent } from './icons/Styles';
import { StyleTextComponent } from './icons/StyleText';
import { StickyTopComponent } from './icons/StickyTop';
import { StackRowComponent } from './icons/StackRow';
import { StackRowWrapComponent } from './icons/StackRowWrap';
import { StackColumnComponent } from './icons/StackColumn';
import { StackColumnWrapComponent } from './icons/StackColumnWrap';
import { SpanRowComponent } from './icons/SpanRow';
import { SpanColumnComponent } from './icons/SpanColumn';
import { RotateComponent } from './icons/Rotate';
import { Rotate90RightComponent } from './icons/Rotate90Right';
import { RelativeComponent } from './icons/Relative';
import { RadiusTrComponent } from './icons/RadiusTr';
import { RadiusTlComponent } from './icons/RadiusTl';
import { RadiusBrComponent } from './icons/RadiusBr';
import { RadiusBlComponent } from './icons/RadiusBl';
import { RadiusAllComponent } from './icons/RadiusAll';
import { PaddingVComponent } from './icons/PaddingV';
import { PaddingTComponent } from './icons/PaddingT';
import { PaddingRComponent } from './icons/PaddingR';
import { PaddingPerComponent } from './icons/PaddingPer';
import { PaddingLComponent } from './icons/PaddingL';
import { PaddingHComponent } from './icons/PaddingH';
import { PaddingBComponent } from './icons/PaddingB';
import { OpacityComponent } from './icons/Opacity';
import { MixedComponent } from './icons/Mixed';
import { MinimizeUiComponent } from './icons/MinimizeUi';
import { MinWidthComponent } from './icons/MinWidth';
import { MinHeightComponent } from './icons/MinHeight';
import { MaxWidthComponent } from './icons/MaxWidth';
import { MaxHeightComponent } from './icons/MaxHeight';
import { MaskComponent } from './icons/Mask';
import { LockAspectRatioComponent } from './icons/LockAspectRatio';
import { ListFolderComponent } from './icons/ListFolder';
import { LetterComponent } from './icons/Letter';
import { LayoutRowComponent } from './icons/LayoutRow';
import { LayoutColumnComponent } from './icons/LayoutColumn';
import { InteractionTriggerWhilePressingComponent } from './icons/InteractionTriggerWhilePressing';
import { InteractionTriggerWhileHoveringComponent } from './icons/InteractionTriggerWhileHovering';
import { InteractionTriggerOnDragComponent } from './icons/InteractionTriggerOnDrag';
import { InteractionTriggerOnClickComponent } from './icons/InteractionTriggerOnClick';
import { InteractionTriggerMouseUpComponent } from './icons/InteractionTriggerMouseUp';
import { InteractionTriggerMouseLeaveComponent } from './icons/InteractionTriggerMouseLeave';
import { InteractionTriggerMouseEnterComponent } from './icons/InteractionTriggerMouseEnter';
import { InteractionTriggerMouseDownComponent } from './icons/InteractionTriggerMouseDown';
import { InteractionTriggerKeyGamepadComponent } from './icons/InteractionTriggerKeyGamepad';
import { InteractionTriggerAfterDelayComponent } from './icons/InteractionTriggerAfterDelay';
import { InteractionNoneComponent } from './icons/InteractionNone';
import { InteractionActionSwapOverlayComponent } from './icons/InteractionActionSwapOverlay';
import { InteractionActionSetVariableModeComponent } from './icons/InteractionActionSetVariableMode';
import { InteractionActionScrollToComponent } from './icons/InteractionActionScrollTo';
import { InteractionActionOpenOverlayComponent } from './icons/InteractionActionOpenOverlay';
import { InteractionActionNavigateToComponent } from './icons/InteractionActionNavigateTo';
import { InteractionActionConditionalComponent } from './icons/InteractionActionConditional';
import { InteractionActionCloseOverlayComponent } from './icons/InteractionActionCloseOverlay';
import { InteractionActionChangeToComponent } from './icons/InteractionActionChangeTo';
import { InteractionActionBackComponent } from './icons/InteractionActionBack';
import { ImageSmallComponent } from './icons/ImageSmall';
import { HyperlinkBrokenComponent } from './icons/HyperlinkBroken';
import { HugWidthComponent } from './icons/HugWidth';
import { HugHeightComponent } from './icons/HugHeight';
import { HouseComponent } from './icons/House';
import { HiddenComponent } from './icons/Hidden';
import { GridComponent } from './icons/Grid';
import { GapVComponent } from './icons/GapV';
import { GapHComponent } from './icons/GapH';
import { FrameComponent } from './icons/Frame';
import { FlipVerticalComponent } from './icons/FlipVertical';
import { FlipHorizontalComponent } from './icons/FlipHorizontal';
import { FixedWidthComponent } from './icons/FixedWidth';
import { FixedHeightComponent } from './icons/FixedHeight';
import { FillWidthComponent } from './icons/FillWidth';
import { FillHeightComponent } from './icons/FillHeight';
import { FileSolidComponent } from './icons/FileSolid';
import { EmbedComponent } from './icons/Embed';
import { ElementComponent } from './icons/Element';
import { EffectsSettingsComponent } from './icons/EffectsSettings';
import { EffectLayerBlurComponent } from './icons/EffectLayerBlur';
import { EffectInnerShadowComponent } from './icons/EffectInnerShadow';
import { EffectDropShadowComponent } from './icons/EffectDropShadow';
import { EffectBackgroundBlurComponent } from './icons/EffectBackgroundBlur';
import { EditObjectComponent } from './icons/EditObject';
import { DuplicateGroupComponent } from './icons/DuplicateGroup';
import { DimensionalComponent } from './icons/Dimensional';
import { DimensionalTransformsComponent } from './icons/DimensionalTransforms';
import { ComponentSolidComponent } from './icons/ComponentSolid';
import { ComponentOutlineComponent } from './icons/ComponentOutline';
import { ColorTypeSolidComponent } from './icons/ColorTypeSolid';
import { ColorTypeImageComponent } from './icons/ColorTypeImage';
import { ColorTypeGradientComponent } from './icons/ColorTypeGradient';
import { ColorOpacityComponent } from './icons/ColorOpacity';
import { ColorAlphaComponent } from './icons/ColorAlpha';
import { CodeComponent } from './icons/Code';
import { CentralizeComponent } from './icons/Centralize';
import { BorderComponent } from './icons/Border';
import { BorderTComponent } from './icons/BorderT';
import { BorderSolidComponent } from './icons/BorderSolid';
import { BorderRComponent } from './icons/BorderR';
import { BorderPerComponent } from './icons/BorderPer';
import { BorderLComponent } from './icons/BorderL';
import { BorderDoubleComponent } from './icons/BorderDouble';
import { BorderDottedComponent } from './icons/BorderDotted';
import { BorderDashComponent } from './icons/BorderDash';
import { BorderBComponent } from './icons/BorderB';
import { BooleanXorComponent } from './icons/BooleanXor';
import { BooleanUnionComponent } from './icons/BooleanUnion';
import { BooleanIntersectionComponent } from './icons/BooleanIntersection';
import { BooleanDifferenceComponent } from './icons/BooleanDifference';
import { ArtificialIntelligenceComponent } from './icons/ArtificialIntelligence';
import { ApplyVariableComponent } from './icons/ApplyVariable';
import { ViewSettingsComponent } from './icons/ViewSettings';
import { ViewKanbanComponent } from './icons/ViewKanban';
import { ViewGridComponent } from './icons/ViewGrid';
import { ViewGalleryComponent } from './icons/ViewGallery';
import { ViewFormComponent } from './icons/ViewForm';
import { ViewDuplicateComponent } from './icons/ViewDuplicate';
import { ViewCalendarComponent } from './icons/ViewCalendar';
import { ViewAddComponent } from './icons/ViewAdd';
import { ToolbarSortComponent } from './icons/ToolbarSort';
import { ToolbarSettingsComponent } from './icons/ToolbarSettings';
import { ToolbarRowHeightTallComponent } from './icons/ToolbarRowHeightTall';
import { ToolbarRowHeightShortComponent } from './icons/ToolbarRowHeightShort';
import { ToolbarRowHeightMediumComponent } from './icons/ToolbarRowHeightMedium';
import { ToolbarRowHeightExtratallComponent } from './icons/ToolbarRowHeightExtratall';
import { ToolbarGroupComponent } from './icons/ToolbarGroup';
import { ToolbarFilterComponent } from './icons/ToolbarFilter';
import { RightSidebarComponent } from './icons/RightSidebar';
import { RecordSettingsComponent } from './icons/RecordSettings';
import { RecordInsertTopComponent } from './icons/RecordInsertTop';
import { RecordInsertBelowComponent } from './icons/RecordInsertBelow';
import { RecordHideComponent } from './icons/RecordHide';
import { RecordFreezeComponent } from './icons/RecordFreeze';
import { RecordEditComponent } from './icons/RecordEdit';
import { RecordDuplicateComponent } from './icons/RecordDuplicate';
import { RecordDeleteComponent } from './icons/RecordDelete';
import { RecordCopyUrlComponent } from './icons/RecordCopyUrl';
import { RecordColorComponent } from './icons/RecordColor';
import { RecordAddComponent } from './icons/RecordAdd';
import { OptionsSortDescendingComponent } from './icons/OptionsSortDescending';
import { OptionsSortAscendingComponent } from './icons/OptionsSortAscending';
import { LinkedDisassociateComponent } from './icons/LinkedDisassociate';
import { LinkedAddComponent } from './icons/LinkedAdd';
import { HistoryComponent } from './icons/History';
import { FieldSortedDescComponent } from './icons/FieldSortedDesc';
import { FieldSortedAscComponent } from './icons/FieldSortedAsc';
import { FieldSettingsComponent } from './icons/FieldSettings';
import { FieldRuleComponent } from './icons/FieldRule';
import { FieldPrimaryComponent } from './icons/FieldPrimary';
import { FieldInsertRightComponent } from './icons/FieldInsertRight';
import { FieldInsertLeftComponent } from './icons/FieldInsertLeft';
import { FieldHideComponent } from './icons/FieldHide';
import { FieldFreezeComponent } from './icons/FieldFreeze';
import { FieldEditComponent } from './icons/FieldEdit';
import { FieldDynamicComponent } from './icons/FieldDynamic';
import { FieldDuplicateComponent } from './icons/FieldDuplicate';
import { FieldDeleteComponent } from './icons/FieldDelete';
import { FieldAddComponent } from './icons/FieldAdd';
import { ExtensionsComponent } from './icons/Extensions';
import { DynamicValueComponent } from './icons/DynamicValue';
import { DynamicLinkedComponent } from './icons/DynamicLinked';
import { DynamicDateComponent } from './icons/DynamicDate';
import { ApiDocumentComponent } from './icons/ApiDocument';
import { UsersSmallComponent } from './icons/UsersSmall';
import { UserSmallComponent } from './icons/UserSmall';
import { UserSettingsSmallComponent } from './icons/UserSettingsSmall';
import { UserSearchSmallComponent } from './icons/UserSearchSmall';
import { UserRemoveSmallComponent } from './icons/UserRemoveSmall';
import { UserDeleteSmallComponent } from './icons/UserDeleteSmall';
import { UserCheckSmallComponent } from './icons/UserCheckSmall';
import { UserAddSmallComponent } from './icons/UserAddSmall';
import { UseComponent } from './icons/Use';
import { UseSettingsComponent } from './icons/UseSettings';
import { UseRemoveComponent } from './icons/UseRemove';
import { UseLockComponent } from './icons/UseLock';
import { UseInvitationComponent } from './icons/UseInvitation';
import { UseEditComponent } from './icons/UseEdit';
import { UseDeleteComponent } from './icons/UseDelete';
import { UseCancelInvitationComponent } from './icons/UseCancelInvitation';
import { UseAdministerComponent } from './icons/UseAdminister';
import { UseAddComponent } from './icons/UseAdd';
import { SecurityComponent } from './icons/Security';
import { RoleComponent } from './icons/Role';
import { RoleRemoveComponent } from './icons/RoleRemove';
import { RoleAddComponent } from './icons/RoleAdd';
import { OrganizationComponent } from './icons/Organization';
import { OrganizationSwitchComponent } from './icons/OrganizationSwitch';
import { OrganizationJoinComponent } from './icons/OrganizationJoin';
import { OrganizationAddComponent } from './icons/OrganizationAdd';
import { MemberAccountsComponent } from './icons/MemberAccounts';
import { DistributeVerticalComponent } from './icons/DistributeVertical';
import { DistributeVerticalSolidComponent } from './icons/DistributeVerticalSolid';
import { DistributeHorizontalComponent } from './icons/DistributeHorizontal';
import { DistributeHorizontalSolidComponent } from './icons/DistributeHorizontalSolid';
import { AlignTopComponent } from './icons/AlignTop';
import { AlignTopSolidComponent } from './icons/AlignTopSolid';
import { AlignRightComponent } from './icons/AlignRight';
import { AlignRightSolidComponent } from './icons/AlignRightSolid';
import { AlignLeftComponent } from './icons/AlignLeft';
import { AlignLeftSolidComponent } from './icons/AlignLeftSolid';
import { AlignCenterVerticalComponent } from './icons/AlignCenterVertical';
import { AlignCenterVerticalSolidComponent } from './icons/AlignCenterVerticalSolid';
import { AlignCenterHorizontalComponent } from './icons/AlignCenterHorizontal';
import { AlignCenterHorizontalSolidComponent } from './icons/AlignCenterHorizontalSolid';
import { AlignBottomComponent } from './icons/AlignBottom';
import { AlignBottomSolidComponent } from './icons/AlignBottomSolid';
import { ZoomOutComponent } from './icons/ZoomOut';
import { ZoomOutSmallComponent } from './icons/ZoomOutSmall';
import { ZoomInComponent } from './icons/ZoomIn';
import { ZoomInSmallComponent } from './icons/ZoomInSmall';
import { UnlockSolidComponent } from './icons/UnlockSolid';
import { UnlockSmallComponent } from './icons/UnlockSmall';
import { TrashComponent } from './icons/Trash';
import { TrashSmallComponent } from './icons/TrashSmall';
import { ThumbUpComponent } from './icons/ThumbUp';
import { ThumbDownComponent } from './icons/ThumbDown';
import { ThemeSystemComponent } from './icons/ThemeSystem';
import { ThemeSunBrightComponent } from './icons/ThemeSunBright';
import { ThemeMoonDarkComponent } from './icons/ThemeMoonDark';
import { TagRemoveComponent } from './icons/TagRemove';
import { TagAddComponent } from './icons/TagAdd';
import { SystemPreferencesComponent } from './icons/SystemPreferences';
import { SystemConfigurationComponent } from './icons/SystemConfiguration';
import { SupportComponent } from './icons/Support';
import { SupportSmallComponent } from './icons/SupportSmall';
import { StarComponent } from './icons/Star';
import { StarSolidComponent } from './icons/StarSolid';
import { SquareRemoveSquarevgComponent } from './icons/SquareRemoveSquarevg';
import { SquareDeleteSquarevgComponent } from './icons/SquareDeleteSquarevg';
import { SquareAddSquarevgComponent } from './icons/SquareAddSquarevg';
import { SocialSharingComponent } from './icons/SocialSharing';
import { SharingComponent } from './icons/Sharing';
import { ShareComponent } from './icons/Share';
import { SetupPreferencesComponent } from './icons/SetupPreferences';
import { SettingsComponent } from './icons/Settings';
import { SendComponent } from './icons/Send';
import { SendMessageSmallComponent } from './icons/SendMessageSmall';
import { SearchComponent } from './icons/Search';
import { SearchSmallComponent } from './icons/SearchSmall';
import { RemoveComponent } from './icons/Remove';
import { RemoveSmallComponent } from './icons/RemoveSmall';
import { RadioBtnComponent } from './icons/RadioBtn';
import { RadioBtnCheckedComponent } from './icons/RadioBtnChecked';
import { QrCodeComponent } from './icons/QrCode';
import { PreferencesComponent } from './icons/Preferences';
import { OptionsComponent } from './icons/Options';
import { NetworkConnectionComponent } from './icons/NetworkConnection';
import { MenuComponent } from './icons/Menu';
import { MailSmallComponent } from './icons/MailSmall';
import { LogListsComponent } from './icons/LogLists';
import { LockComponent } from './icons/Lock';
import { LockSolidComponent } from './icons/LockSolid';
import { LockSmallComponent } from './icons/LockSmall';
import { LoaderCircleComponent } from './icons/LoaderCircle';
import { LaunchComponent } from './icons/Launch';
import { LaunchAppComponent } from './icons/LaunchApp';
import { IndeterminateComponent } from './icons/Indeterminate';
import { GripVerticalSmallComponent } from './icons/GripVerticalSmall';
import { GripHorizontalSmallComponent } from './icons/GripHorizontalSmall';
import { GridInterfaceComponent } from './icons/GridInterface';
import { GalleryViewComponent } from './icons/GalleryView';
import { FavoriteComponent } from './icons/Favorite';
import { FavoriteSolidComponent } from './icons/FavoriteSolid';
import { EmailComponent } from './icons/Email';
import { EllipsisVerticalSmallComponent } from './icons/EllipsisVerticalSmall';
import { EllipsisSmallComponent } from './icons/EllipsisSmall';
import { DotComponent } from './icons/Dot';
import { DeleteComponent } from './icons/Delete';
import { DeleteSmallComponent } from './icons/DeleteSmall';
import { CogwheelSolidSmallComponent } from './icons/CogwheelSolidSmall';
import { CogwheelSmallComponent } from './icons/CogwheelSmall';
import { ClockComponent } from './icons/Clock';
import { CircleRemoveComponent } from './icons/CircleRemove';
import { CircleCirclehecirclekComponent } from './icons/CircleCirclehecirclek';
import { CircleAddComponent } from './icons/CircleAdd';
import { CheckboxBtnComponent } from './icons/CheckboxBtn';
import { CheckboxBtnCheckedComponent } from './icons/CheckboxBtnChecked';
import { CheckComponent } from './icons/Check';
import { BanComponent } from './icons/Ban';
import { AttachSmallComponent } from './icons/AttachSmall';
import { AtSignComponent } from './icons/AtSign';
import { AtSignSmallComponent } from './icons/AtSignSmall';
import { AiComponent } from './icons/Ai';
import { AddComponent } from './icons/Add';
import { AddSmallComponent } from './icons/AddSmall';
import { ViewChartComponent } from './icons/ViewChart';
import { TrendLineComponent } from './icons/TrendLine';
import { TableComponent } from './icons/Table';
import { StackedBarComponent } from './icons/StackedBar';
import { ScrollingWordsComponent } from './icons/ScrollingWords';
import { RowStackedComponent } from './icons/RowStacked';
import { RowNormalComponent } from './icons/RowNormal';
import { RowGroupComponent } from './icons/RowGroup';
import { RadarComponent } from './icons/Radar';
import { QuadrantComponent } from './icons/Quadrant';
import { PieComponent } from './icons/Pie';
import { PictureComponent } from './icons/Picture';
import { NumberComponent } from './icons/Number';
import { NpsComponent } from './icons/Nps';
import { MultipleAxesComponent } from './icons/MultipleAxes';
import { MultiLineComponent } from './icons/MultiLine';
import { MixedLineAndBarComponent } from './icons/MixedLineAndBar';
import { LineComponent } from './icons/Line';
import { JourneyComponent } from './icons/Journey';
import { FilterComponent } from './icons/Filter';
import { FilterBlockComponent } from './icons/FilterBlock';
import { DoughnutComponent } from './icons/Doughnut';
import { DoubleLineComponent } from './icons/DoubleLine';
import { DividerComponent } from './icons/Divider';
import { ColumnComponent } from './icons/Column';
import { ColumnStackedComponent } from './icons/ColumnStacked';
import { ColumnNormalComponent } from './icons/ColumnNormal';
import { ColumnGroupComponent } from './icons/ColumnGroup';
import { ChartEditComponent } from './icons/ChartEdit';
import { ChartDeleteComponent } from './icons/ChartDelete';
import { BlueprintComponent } from './icons/Blueprint';
import { BlueprintTimelineComponent } from './icons/BlueprintTimeline';
import { BlueprintNodeComponent } from './icons/BlueprintNode';
import { BlueprintDividerComponent } from './icons/BlueprintDivider';
import { BlockDeleteComponent } from './icons/BlockDelete';
import { BlockAddComponent } from './icons/BlockAdd';
import { BiaxialComponent } from './icons/Biaxial';
import { BarComponent } from './icons/Bar';
import { UploadComponent } from './icons/Upload';
import { UploadDataComponent } from './icons/UploadData';
import { UpArrowSmallComponent } from './icons/UpArrowSmall';
import { UndoComponent } from './icons/Undo';
import { TriangleUpComponent } from './icons/TriangleUp';
import { TriangleRightComponent } from './icons/TriangleRight';
import { TriangleLeftComponent } from './icons/TriangleLeft';
import { TriangleDownComponent } from './icons/TriangleDown';
import { TransactionSmallComponent } from './icons/TransactionSmall';
import { TrafficSmallComponent } from './icons/TrafficSmall';
import { SystemUpdateComponent } from './icons/SystemUpdate';
import { SwapVerticalSmallComponent } from './icons/SwapVerticalSmall';
import { SwapHorizontalSmallComponent } from './icons/SwapHorizontalSmall';
import { SlideRightComponent } from './icons/SlideRight';
import { SlideLeftComponent } from './icons/SlideLeft';
import { RightArrowSmallComponent } from './icons/RightArrowSmall';
import { RespondArrowComponent } from './icons/RespondArrow';
import { ResizeYSmallComponent } from './icons/ResizeYSmall';
import { ResizeXSmallComponent } from './icons/ResizeXSmall';
import { ReplyArrowComponent } from './icons/ReplyArrow';
import { ReloadComponent } from './icons/Reload';
import { RefreshComponent } from './icons/Refresh';
import { RedoComponent } from './icons/Redo';
import { LogoutComponent } from './icons/Logout';
import { LogOutSmallComponent } from './icons/LogOutSmall';
import { LogInComponent } from './icons/LogIn';
import { LeftArrowSmallComponent } from './icons/LeftArrowSmall';
import { InputComponent } from './icons/Input';
import { ForwardComponent } from './icons/Forward';
import { FormatRightComponent } from './icons/FormatRight';
import { FormatLeftComponent } from './icons/FormatLeft';
import { FilesUploadComponent } from './icons/FilesUpload';
import { FilesDownloadComponent } from './icons/FilesDownload';
import { EnlargeComponent } from './icons/Enlarge';
import { EnlargeHComponent } from './icons/EnlargeH';
import { DownloadComponent } from './icons/Download';
import { DownloadDataComponent } from './icons/DownloadData';
import { DownArrowSmallComponent } from './icons/DownArrowSmall';
import { DoubleArrowRightComponent } from './icons/DoubleArrowRight';
import { DoubleArrowLeftComponent } from './icons/DoubleArrowLeft';
import { DataUploadComponent } from './icons/DataUpload';
import { DataDownloadComponent } from './icons/DataDownload';
import { CycleComponent } from './icons/Cycle';
import { CurvedArrowRightComponent } from './icons/CurvedArrowRight';
import { CurvedArrowLeftComponent } from './icons/CurvedArrowLeft';
import { ConversionSmallComponent } from './icons/ConversionSmall';
import { ChevronUpComponent } from './icons/ChevronUp';
import { ChevronUpSmallComponent } from './icons/ChevronUpSmall';
import { ChevronRightComponent } from './icons/ChevronRight';
import { ChevronRightSmallComponent } from './icons/ChevronRightSmall';
import { ChevronLeftComponent } from './icons/ChevronLeft';
import { ChevronLeftSmallComponent } from './icons/ChevronLeftSmall';
import { ChevronDownComponent } from './icons/ChevronDown';
import { ChevronDownSmallComponent } from './icons/ChevronDownSmall';
import { BackwardComponent } from './icons/Backward';
import { ArrowsMaximizeComponent } from './icons/ArrowsMaximize';
import { ArrowUpComponent } from './icons/ArrowUp';
import { ArrowRightComponent } from './icons/ArrowRight';
import { ArrowMinimizeComponent } from './icons/ArrowMinimize';
import { ArrowLeftComponent } from './icons/ArrowLeft';
import { ArrowDownComponent } from './icons/ArrowDown';
import { XCircleComponent } from './icons/XCircle';
import { XCircle1Component } from './icons/XCircle1';
import { WarningTriangleComponent } from './icons/WarningTriangle';
import { WarningTriangleSmallComponent } from './icons/WarningTriangleSmall';
import { WarningSquareComponent } from './icons/WarningSquare';
import { WarningRhomboidSmallComponent } from './icons/WarningRhomboidSmall';
import { WarningHexagonSmallComponent } from './icons/WarningHexagonSmall';
import { WarningCircleComponent } from './icons/WarningCircle';
import { TriangleWarningLargeComponent } from './icons/TriangleWarningLarge';
import { TriangleWarningLargeSolidComponent } from './icons/TriangleWarningLargeSolid';
import { SquareWarningLargeComponent } from './icons/SquareWarningLarge';
import { SquareWarningLargeSolidComponent } from './icons/SquareWarningLargeSolid';
import { SquareQuestionLargeComponent } from './icons/SquareQuestionLarge';
import { SquareQuestionLargeSolidComponent } from './icons/SquareQuestionLargeSolid';
import { SquareInfoLargeComponent } from './icons/SquareInfoLarge';
import { SquareInfoLargeSolidComponent } from './icons/SquareInfoLargeSolid';
import { QuestionSquareComponent } from './icons/QuestionSquare';
import { QuestionCircleComponent } from './icons/QuestionCircle';
import { NotificationsComponent } from './icons/Notifications';
import { MegaphoneComponent } from './icons/Megaphone';
import { InfoSquareComponent } from './icons/InfoSquare';
import { InfoCircleComponent } from './icons/InfoCircle';
import { CommentComponent } from './icons/Comment';
import { CircleWarningLargeComponent } from './icons/CircleWarningLarge';
import { CircleWarningLargeSolidComponent } from './icons/CircleWarningLargeSolid';
import { CircleRemoveLargeComponent } from './icons/CircleRemoveLarge';
import { CircleRemoveLargeSolidComponent } from './icons/CircleRemoveLargeSolid';
import { CircleQuestionLargeComponent } from './icons/CircleQuestionLarge';
import { CircleQuestionLargeSolidComponent } from './icons/CircleQuestionLargeSolid';
import { CircleInfoLargeComponent } from './icons/CircleInfoLarge';
import { CircleInfoLargeSolidComponent } from './icons/CircleInfoLargeSolid';
import { CircleCheckLargeComponent } from './icons/CircleCheckLarge';
import { CircleCheckLargeSolidComponent } from './icons/CircleCheckLargeSolid';
import { CheckSquareComponent } from './icons/CheckSquare';
import { CheckCircleComponent } from './icons/CheckCircle';
import { ChatComponent } from './icons/Chat';
import { ChatLargeComponent } from './icons/ChatLarge';
import { ChatLargeSolidComponent } from './icons/ChatLargeSolid';
import { AlarmSmallComponent } from './icons/AlarmSmall';
import { AlarmSmallSolidComponent } from './icons/AlarmSmallSolid';

const COMPONENTS = [
  WorkspaceComponent,
  WorkspaceUploadComponent,
  WorkspaceTemplateComponent,
  WorkspaceTemplateRemoveComponent,
  WorkspaceTemplateEditComponent,
  WorkspaceTemplateConvertComponent,
  WorkspaceTemplateAddComponent,
  WorkspaceSettingsComponent,
  WorkspaceDownloadComponent,
  WorkspaceDeleteComponent,
  WorkspaceAddComponent,
  ModuleWorkflowComponent,
  ModuleFormsComponent,
  ModuleDatasheetsComponent,
  ModuleChartsComponent,
  AppearanceComponent,
  WelcomeWorkflowComponent,
  WelcomeInterfaceComponent,
  WelcomeFormsComponent,
  WelcomeExtensionComponent,
  WelcomeDatasheetsComponent,
  WelcomeChartsComponent,
  WorkflowFileComponent,
  WorkflowFileOutportComponent,
  WorkflowFileImportComponent,
  WorkflowFileDeleteComponent,
  WorkflowFileAddComponent,
  TriggerStartedByWebhookComponent,
  TriggerStartedByDateOrTimeFieldComponent,
  TriggerStartedByAnEventComponent,
  TriggerStartedByAButtonComponent,
  TriggerStartedAtASpecificTimeComponent,
  TriggerConnectorEventComponent,
  ToolbarTriggerComponent,
  ToolbarAllComponent,
  ToolbarActionComponent,
  SystemComponent,
  RefreshErrorComponent,
  RefreshAllComponent,
  ReferenceLineComponent,
  PublishComponent,
  PlaySolidComponent,
  PbpOutputComponent,
  PbpInputComponent,
  PackagedComponent,
  PackagedOutportComponent,
  PackagedImportComponent,
  PackagedAddComponent,
  HistotyListComponent,
  FitScreenComponent,
  DuplicateSolidComponent,
  CircleUnpassedSolidComponent,
  CircleSuccessSolidComponent,
  CircleSkipSolidComponent,
  CirclePlaySolidComponent,
  CirclePauseSolidComponent,
  CircleErrorSolidComponent,
  BoltComponent,
  BoltSolidComponent,
  BinSolidComponent,
  AutoLayoutComponent,
  AddBranchSolidComponent,
  ActionWebhookComponent,
  ActionWaitForSomeTimeComponent,
  ActionUpdateRecordComponent,
  ActionPathComponent,
  ActionPackagedNodeComponent,
  ActionNotificationComponent,
  ActionIfComponent,
  ActionHttpRequestComponent,
  ActionGetSegmentFiltersComponent,
  ActionGetRecordsFromWebhookComponent,
  ActionGetRecordsFromLinkedRecordsComponent,
  ActionGetRecordsFromCodeBlockComponent,
  ActionGetRecordsFromANodeComponent,
  ActionGetRecordsFromADatasheetComponent,
  ActionGetOneRecordFromLinkedRecordsComponent,
  ActionGetOneRecordFromADatasheetComponent,
  ActionFormulaNodeComponent,
  ActionDeleteRecordComponent,
  ActionDateNodeComponent,
  ActionCreateRecordComponent,
  ActionConnectorRequestNodeComponent,
  ActionCodeBlockComponent,
  WecomComponent,
  WecomColorComponent,
  WechatComponent,
  WechatPublicComponent,
  TeamsColorComponent,
  SlackComponent,
  SlackColorComponent,
  GoogleComponent,
  GoogleDriveColorComponent,
  GoogleColorComponent,
  GithubComponent,
  FeishuComponent,
  FeishuColorComponent,
  DingdingComponent,
  DingdingColorComponent,
  ChoiceformComponent,
  ChoiceformColorComponent,
  WarningPublishFailComponent,
  WarningNotFoundComponent,
  WarningLinkExpiredComponent,
  WarningFileBrokenComponent,
  EmptyWorkspaceComponent,
  EmptyWorkflowComponent,
  EmptyWorkflowNodeComponent,
  EmptyUserComponent,
  EmptyTrashComponent,
  EmptySurveyComponent,
  EmptySortComponent,
  EmptySearchComponent,
  EmptyOrganizationsComponent,
  EmptyNotificationsComponent,
  EmptyNoAuthorityComponent,
  EmptyLogicComponent,
  EmptyImageComponent,
  EmptyGroupComponent,
  EmptyFolderComponent,
  EmptyFilterComponent,
  EmptyFileComponent,
  EmptyDynamicComponent,
  EmptyDatabaseComponent,
  EmptyDataComponent,
  EmptyConnectorComponent,
  EmptyChartComponent,
  YesNoComponent,
  WelcomeComponent,
  WebsiteComponent,
  UrlRedirectComponent,
  ToolbarScreenAspectVerticalSolidComponent,
  ToolbarScreenAspectVerticalRegularComponent,
  ToolbarScreenAspectSquareSolidComponent,
  ToolbarScreenAspectSquareRegularComponent,
  ToolbarScreenAspectHorizontalSolidComponent,
  ToolbarScreenAspectHorizontalRegularComponent,
  ToolbarPreviewSolidComponent,
  ToolbarPreviewRegularComponent,
  ToolbarCreateSolidComponent,
  ToolbarCreateRegularComponent,
  StatementComponent,
  ShortTextComponent,
  SettingsSolidComponent,
  SettingsRegularComponent,
  RoundedSmallComponent,
  RoundedNoneComponent,
  RoundedMediumComponent,
  RoundedFullComponent,
  RatingComponent,
  RatingThumbUpSolidComponent,
  RatingThumbUpRegularComponent,
  RatingStarSolidComponent,
  RatingSmileSolidComponent,
  RatingSmileRegularComponent,
  RatingShapeRegularComponent,
  RatingHeartSolidComponent,
  RatingHeartRegularComponent,
  RankingComponent,
  PictureChoiceComponent,
  PhoneComponent,
  OpinionScaleComponent,
  MultipleChoiceComponent,
  MatrixComponent,
  LongTextComponent,
  LogicSolidComponent,
  LogicRegularComponent,
  LayoutWallpaperComponent,
  LayoutTopRightComponent,
  LayoutTopLeftComponent,
  LayoutStackComponent,
  LayoutSplitRightComponent,
  LayoutSplitLeftComponent,
  LayoutFloatRightComponent,
  LayoutFloatLeftComponent,
  LayoutBottomRightComponent,
  LayoutBottomLeftComponent,
  GroupComponent,
  FormComponent,
  FormFileComponent,
  FormDeleteComponent,
  FormAddComponent,
  EndedComponent,
  EmbedTypeStandardComponent,
  EmbedTypeSliderComponent,
  EmbedTypeSideTabComponent,
  EmbedTypePopupComponent,
  EmbedTypePopoverComponent,
  EmbedTypeFullPageComponent,
  DropdownComponent,
  DesignSolidComponent,
  DesignRegularComponent,
  DateComponent,
  CreateSolidComponent,
  CreateRegularComponent,
  ContactinfoComponent,
  CollectorComponent,
  CollectorRemoveComponent,
  CollectorAddComponent,
  CollectorActiveComponent,
  AlignmentRightComponent,
  AlignmentLeftComponent,
  AlignmentCenterComponent,
  AddressComponent,
  FolderComponent,
  FolderSettingsComponent,
  FolderRemoveComponent,
  FolderPlusComponent,
  FolderPenComponent,
  FolderOpenComponent,
  FolderLockComponent,
  FolderInputComponent,
  FolderDeleteComponent,
  FolderClosedComponent,
  FileComponent,
  FileUploadComponent,
  FileTreeComponent,
  FileSubComponent,
  FileShareComponent,
  FileSettingsComponent,
  FileRefreshComponent,
  FileMoveComponent,
  FileImportComponent,
  FileExportComponent,
  FileEditComponent,
  FileDuplicateComponent,
  FileDownloadComponent,
  FileDeleteComponent,
  FileClearComponent,
  FileAddComponent,
  SpeechlessComponent,
  SmileComponent,
  SatisfiedComponent,
  SadComponent,
  DeleteReactionComponent,
  AngryComponent,
  AddReactionComponent,
  ViewSmallComponent,
  VersionComponent,
  TagSmallComponent,
  SwatchbookComponent,
  SwatchbookAiComponent,
  ShowComponent,
  RenameComponent,
  PrinterComponent,
  MaximizeAreaSmallComponent,
  ImageComponent,
  ImageSettingsComponent,
  ImageRemoveComponent,
  ImageNewComponent,
  ImageImportComponent,
  ImageExportComponent,
  ImageDuplicateComponent,
  ImageDeleteComponent,
  ImageAiComponent,
  ImageAddComponent,
  HideComponent,
  FillColorComponent,
  ExpandSmallComponent,
  EditComponent,
  EditSmallComponent,
  EditReadonlyComponent,
  DuplicateComponent,
  DuplicateNewComponent,
  DeleteKeySmallComponent,
  CopySmallComponent,
  CollapseLayersComponent,
  FieldTypeUserComponent,
  FieldTypeUrlComponent,
  FieldTypeTimeComponent,
  FieldTypeTextComponent,
  FieldTypeSystemUserComponent,
  FieldTypeSystemIdComponent,
  FieldTypeSystemDateComponent,
  FieldTypeSingleSelectComponent,
  FieldTypeSelectAiComponent,
  FieldTypeRatingComponent,
  FieldTypePrimaryComponent,
  FieldTypePhoneComponent,
  FieldTypePercentComponent,
  FieldTypeNumberComponent,
  FieldTypeMultiSelectComponent,
  FieldTypeMailComponent,
  FieldTypeLookupComponent,
  FieldTypeLongTextComponent,
  FieldTypeLongTextAiComponent,
  FieldTypeLockComponent,
  FieldTypeLinkedComponent,
  FieldTypeLinkedAiComponent,
  FieldTypeFormulaComponent,
  FieldTypeFilterComponent,
  FieldTypeDateComponent,
  FieldTypeDateAndTimeComponent,
  FieldTypeCurrencyComponent,
  FieldTypeCountComponent,
  FieldTypeCheckboxComponent,
  FieldTypeButtonComponent,
  FieldTypeAutoNumberComponent,
  FieldTypeAttachmentComponent,
  FieldTypeArrayComponent,
  FieldTypeAiComponent,
  VisibleComponent,
  ViewportComponent,
  VariablesStringComponent,
  VariablesNumberComponent,
  VariablesEnumComponent,
  VariablesColorComponent,
  VariablesBooleanComponent,
  VariableComponent,
  UnlockAspectRatioComponent,
  TransformsScaleComponent,
  TransformsRotateComponent,
  TransformsPerspectiveComponent,
  TransformsDepthComponent,
  Transforms3dRotateComponent,
  ToolbarTextComponent,
  ToolbarStarComponent,
  ToolbarSelectComponent,
  ToolbarScaleComponent,
  ToolbarRectangleComponent,
  ToolbarPositionComponent,
  ToolbarPolygonComponent,
  ToolbarPenToolComponent,
  ToolbarLineComponent,
  ToolbarImageComponent,
  ToolbarHandComponent,
  ToolbarFrameComponent,
  ToolbarEllipseComponent,
  ToolbarComponentComponent,
  ToolbarCommentComponent,
  ToolbarArrowComponent,
  ToolbarAiComponent,
  TargetComponent,
  SubIndicatorDotComponent,
  StylesComponent,
  StyleTextComponent,
  StickyTopComponent,
  StackRowComponent,
  StackRowWrapComponent,
  StackColumnComponent,
  StackColumnWrapComponent,
  SpanRowComponent,
  SpanColumnComponent,
  RotateComponent,
  Rotate90RightComponent,
  RelativeComponent,
  RadiusTrComponent,
  RadiusTlComponent,
  RadiusBrComponent,
  RadiusBlComponent,
  RadiusAllComponent,
  PaddingVComponent,
  PaddingTComponent,
  PaddingRComponent,
  PaddingPerComponent,
  PaddingLComponent,
  PaddingHComponent,
  PaddingBComponent,
  OpacityComponent,
  MixedComponent,
  MinimizeUiComponent,
  MinWidthComponent,
  MinHeightComponent,
  MaxWidthComponent,
  MaxHeightComponent,
  MaskComponent,
  LockAspectRatioComponent,
  ListFolderComponent,
  LetterComponent,
  LayoutRowComponent,
  LayoutColumnComponent,
  InteractionTriggerWhilePressingComponent,
  InteractionTriggerWhileHoveringComponent,
  InteractionTriggerOnDragComponent,
  InteractionTriggerOnClickComponent,
  InteractionTriggerMouseUpComponent,
  InteractionTriggerMouseLeaveComponent,
  InteractionTriggerMouseEnterComponent,
  InteractionTriggerMouseDownComponent,
  InteractionTriggerKeyGamepadComponent,
  InteractionTriggerAfterDelayComponent,
  InteractionNoneComponent,
  InteractionActionSwapOverlayComponent,
  InteractionActionSetVariableModeComponent,
  InteractionActionScrollToComponent,
  InteractionActionOpenOverlayComponent,
  InteractionActionNavigateToComponent,
  InteractionActionConditionalComponent,
  InteractionActionCloseOverlayComponent,
  InteractionActionChangeToComponent,
  InteractionActionBackComponent,
  ImageSmallComponent,
  HyperlinkBrokenComponent,
  HugWidthComponent,
  HugHeightComponent,
  HouseComponent,
  HiddenComponent,
  GridComponent,
  GapVComponent,
  GapHComponent,
  FrameComponent,
  FlipVerticalComponent,
  FlipHorizontalComponent,
  FixedWidthComponent,
  FixedHeightComponent,
  FillWidthComponent,
  FillHeightComponent,
  FileSolidComponent,
  EmbedComponent,
  ElementComponent,
  EffectsSettingsComponent,
  EffectLayerBlurComponent,
  EffectInnerShadowComponent,
  EffectDropShadowComponent,
  EffectBackgroundBlurComponent,
  EditObjectComponent,
  DuplicateGroupComponent,
  DimensionalComponent,
  DimensionalTransformsComponent,
  ComponentSolidComponent,
  ComponentOutlineComponent,
  ColorTypeSolidComponent,
  ColorTypeImageComponent,
  ColorTypeGradientComponent,
  ColorOpacityComponent,
  ColorAlphaComponent,
  CodeComponent,
  CentralizeComponent,
  BorderComponent,
  BorderTComponent,
  BorderSolidComponent,
  BorderRComponent,
  BorderPerComponent,
  BorderLComponent,
  BorderDoubleComponent,
  BorderDottedComponent,
  BorderDashComponent,
  BorderBComponent,
  BooleanXorComponent,
  BooleanUnionComponent,
  BooleanIntersectionComponent,
  BooleanDifferenceComponent,
  ArtificialIntelligenceComponent,
  ApplyVariableComponent,
  ViewSettingsComponent,
  ViewKanbanComponent,
  ViewGridComponent,
  ViewGalleryComponent,
  ViewFormComponent,
  ViewDuplicateComponent,
  ViewCalendarComponent,
  ViewAddComponent,
  ToolbarSortComponent,
  ToolbarSettingsComponent,
  ToolbarRowHeightTallComponent,
  ToolbarRowHeightShortComponent,
  ToolbarRowHeightMediumComponent,
  ToolbarRowHeightExtratallComponent,
  ToolbarGroupComponent,
  ToolbarFilterComponent,
  RightSidebarComponent,
  RecordSettingsComponent,
  RecordInsertTopComponent,
  RecordInsertBelowComponent,
  RecordHideComponent,
  RecordFreezeComponent,
  RecordEditComponent,
  RecordDuplicateComponent,
  RecordDeleteComponent,
  RecordCopyUrlComponent,
  RecordColorComponent,
  RecordAddComponent,
  OptionsSortDescendingComponent,
  OptionsSortAscendingComponent,
  LinkedDisassociateComponent,
  LinkedAddComponent,
  HistoryComponent,
  FieldSortedDescComponent,
  FieldSortedAscComponent,
  FieldSettingsComponent,
  FieldRuleComponent,
  FieldPrimaryComponent,
  FieldInsertRightComponent,
  FieldInsertLeftComponent,
  FieldHideComponent,
  FieldFreezeComponent,
  FieldEditComponent,
  FieldDynamicComponent,
  FieldDuplicateComponent,
  FieldDeleteComponent,
  FieldAddComponent,
  ExtensionsComponent,
  DynamicValueComponent,
  DynamicLinkedComponent,
  DynamicDateComponent,
  ApiDocumentComponent,
  UsersSmallComponent,
  UserSmallComponent,
  UserSettingsSmallComponent,
  UserSearchSmallComponent,
  UserRemoveSmallComponent,
  UserDeleteSmallComponent,
  UserCheckSmallComponent,
  UserAddSmallComponent,
  UseComponent,
  UseSettingsComponent,
  UseRemoveComponent,
  UseLockComponent,
  UseInvitationComponent,
  UseEditComponent,
  UseDeleteComponent,
  UseCancelInvitationComponent,
  UseAdministerComponent,
  UseAddComponent,
  SecurityComponent,
  RoleComponent,
  RoleRemoveComponent,
  RoleAddComponent,
  OrganizationComponent,
  OrganizationSwitchComponent,
  OrganizationJoinComponent,
  OrganizationAddComponent,
  MemberAccountsComponent,
  DistributeVerticalComponent,
  DistributeVerticalSolidComponent,
  DistributeHorizontalComponent,
  DistributeHorizontalSolidComponent,
  AlignTopComponent,
  AlignTopSolidComponent,
  AlignRightComponent,
  AlignRightSolidComponent,
  AlignLeftComponent,
  AlignLeftSolidComponent,
  AlignCenterVerticalComponent,
  AlignCenterVerticalSolidComponent,
  AlignCenterHorizontalComponent,
  AlignCenterHorizontalSolidComponent,
  AlignBottomComponent,
  AlignBottomSolidComponent,
  ZoomOutComponent,
  ZoomOutSmallComponent,
  ZoomInComponent,
  ZoomInSmallComponent,
  UnlockSolidComponent,
  UnlockSmallComponent,
  TrashComponent,
  TrashSmallComponent,
  ThumbUpComponent,
  ThumbDownComponent,
  ThemeSystemComponent,
  ThemeSunBrightComponent,
  ThemeMoonDarkComponent,
  TagRemoveComponent,
  TagAddComponent,
  SystemPreferencesComponent,
  SystemConfigurationComponent,
  SupportComponent,
  SupportSmallComponent,
  StarComponent,
  StarSolidComponent,
  SquareRemoveSquarevgComponent,
  SquareDeleteSquarevgComponent,
  SquareAddSquarevgComponent,
  SocialSharingComponent,
  SharingComponent,
  ShareComponent,
  SetupPreferencesComponent,
  SettingsComponent,
  SendComponent,
  SendMessageSmallComponent,
  SearchComponent,
  SearchSmallComponent,
  RemoveComponent,
  RemoveSmallComponent,
  RadioBtnComponent,
  RadioBtnCheckedComponent,
  QrCodeComponent,
  PreferencesComponent,
  OptionsComponent,
  NetworkConnectionComponent,
  MenuComponent,
  MailSmallComponent,
  LogListsComponent,
  LockComponent,
  LockSolidComponent,
  LockSmallComponent,
  LoaderCircleComponent,
  LaunchComponent,
  LaunchAppComponent,
  IndeterminateComponent,
  GripVerticalSmallComponent,
  GripHorizontalSmallComponent,
  GridInterfaceComponent,
  GalleryViewComponent,
  FavoriteComponent,
  FavoriteSolidComponent,
  EmailComponent,
  EllipsisVerticalSmallComponent,
  EllipsisSmallComponent,
  DotComponent,
  DeleteComponent,
  DeleteSmallComponent,
  CogwheelSolidSmallComponent,
  CogwheelSmallComponent,
  ClockComponent,
  CircleRemoveComponent,
  CircleCirclehecirclekComponent,
  CircleAddComponent,
  CheckboxBtnComponent,
  CheckboxBtnCheckedComponent,
  CheckComponent,
  BanComponent,
  AttachSmallComponent,
  AtSignComponent,
  AtSignSmallComponent,
  AiComponent,
  AddComponent,
  AddSmallComponent,
  ViewChartComponent,
  TrendLineComponent,
  TableComponent,
  StackedBarComponent,
  ScrollingWordsComponent,
  RowStackedComponent,
  RowNormalComponent,
  RowGroupComponent,
  RadarComponent,
  QuadrantComponent,
  PieComponent,
  PictureComponent,
  NumberComponent,
  NpsComponent,
  MultipleAxesComponent,
  MultiLineComponent,
  MixedLineAndBarComponent,
  LineComponent,
  JourneyComponent,
  FilterComponent,
  FilterBlockComponent,
  DoughnutComponent,
  DoubleLineComponent,
  DividerComponent,
  ColumnComponent,
  ColumnStackedComponent,
  ColumnNormalComponent,
  ColumnGroupComponent,
  ChartEditComponent,
  ChartDeleteComponent,
  BlueprintComponent,
  BlueprintTimelineComponent,
  BlueprintNodeComponent,
  BlueprintDividerComponent,
  BlockDeleteComponent,
  BlockAddComponent,
  BiaxialComponent,
  BarComponent,
  UploadComponent,
  UploadDataComponent,
  UpArrowSmallComponent,
  UndoComponent,
  TriangleUpComponent,
  TriangleRightComponent,
  TriangleLeftComponent,
  TriangleDownComponent,
  TransactionSmallComponent,
  TrafficSmallComponent,
  SystemUpdateComponent,
  SwapVerticalSmallComponent,
  SwapHorizontalSmallComponent,
  SlideRightComponent,
  SlideLeftComponent,
  RightArrowSmallComponent,
  RespondArrowComponent,
  ResizeYSmallComponent,
  ResizeXSmallComponent,
  ReplyArrowComponent,
  ReloadComponent,
  RefreshComponent,
  RedoComponent,
  LogoutComponent,
  LogOutSmallComponent,
  LogInComponent,
  LeftArrowSmallComponent,
  InputComponent,
  ForwardComponent,
  FormatRightComponent,
  FormatLeftComponent,
  FilesUploadComponent,
  FilesDownloadComponent,
  EnlargeComponent,
  EnlargeHComponent,
  DownloadComponent,
  DownloadDataComponent,
  DownArrowSmallComponent,
  DoubleArrowRightComponent,
  DoubleArrowLeftComponent,
  DataUploadComponent,
  DataDownloadComponent,
  CycleComponent,
  CurvedArrowRightComponent,
  CurvedArrowLeftComponent,
  ConversionSmallComponent,
  ChevronUpComponent,
  ChevronUpSmallComponent,
  ChevronRightComponent,
  ChevronRightSmallComponent,
  ChevronLeftComponent,
  ChevronLeftSmallComponent,
  ChevronDownComponent,
  ChevronDownSmallComponent,
  BackwardComponent,
  ArrowsMaximizeComponent,
  ArrowUpComponent,
  ArrowRightComponent,
  ArrowMinimizeComponent,
  ArrowLeftComponent,
  ArrowDownComponent,
  XCircleComponent,
  XCircle1Component,
  WarningTriangleComponent,
  WarningTriangleSmallComponent,
  WarningSquareComponent,
  WarningRhomboidSmallComponent,
  WarningHexagonSmallComponent,
  WarningCircleComponent,
  TriangleWarningLargeComponent,
  TriangleWarningLargeSolidComponent,
  SquareWarningLargeComponent,
  SquareWarningLargeSolidComponent,
  SquareQuestionLargeComponent,
  SquareQuestionLargeSolidComponent,
  SquareInfoLargeComponent,
  SquareInfoLargeSolidComponent,
  QuestionSquareComponent,
  QuestionCircleComponent,
  NotificationsComponent,
  MegaphoneComponent,
  InfoSquareComponent,
  InfoCircleComponent,
  CommentComponent,
  CircleWarningLargeComponent,
  CircleWarningLargeSolidComponent,
  CircleRemoveLargeComponent,
  CircleRemoveLargeSolidComponent,
  CircleQuestionLargeComponent,
  CircleQuestionLargeSolidComponent,
  CircleInfoLargeComponent,
  CircleInfoLargeSolidComponent,
  CircleCheckLargeComponent,
  CircleCheckLargeSolidComponent,
  CheckSquareComponent,
  CheckCircleComponent,
  ChatComponent,
  ChatLargeComponent,
  ChatLargeSolidComponent,
  AlarmSmallComponent,
  AlarmSmallSolidComponent
];

@NgModule({
  imports: [
    CommonModule,
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class IconsModule { }
