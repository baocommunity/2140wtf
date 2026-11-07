import { Award, CheckCircle, Shield, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JurorOnboardingCardProps {
  onJoin: () => void;
}

/**
 * Plain-language, jargon-free juror onboarding hero (matches
 * docs/architecture/frost-plan/JUROR_ONBOARDING_UX.md): what jurors do, what
 * it costs, one "Become a juror" call to action. No FROST/MLS/DKG/nsec/relay
 * jargon anywhere.
 */
export function JurorOnboardingCard({ onJoin }: JurorOnboardingCardProps) {
  return (
    <Card data-testid="juror-onboarding-card">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <Shield className="size-5 text-primary" />
          <h2 className="text-xl font-semibold">Become a juror</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Jurors vote on market outcomes and help keep markets honest. No
          special hardware, no technical knowledge required — your votes are
          signed automatically on your device.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle className="size-4 text-primary" />
            Vote on outcomes with one tap
          </li>
          <li className="flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            Earn a share of market fees for honest votes
          </li>
          <li className="flex items-center gap-2">
            <Award className="size-4 text-primary" />
            Nothing to buy, nothing to install — join in under a minute
          </li>
        </ul>
        <Button onClick={onJoin} data-testid="juror-join-button" className="w-full sm:w-auto">
          Become a juror
        </Button>
        <p className="text-xs text-muted-foreground">
          You can leave any time. Your keys never leave your device.
        </p>
      </CardContent>
    </Card>
  );
}

export default JurorOnboardingCard;
